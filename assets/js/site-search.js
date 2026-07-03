/*
 * Client-side help search for the PasteFlow support site.
 *
 * Fetches the prebuilt index (assets/search-index.json, produced by
 * scripts/build-docs-search-index.mjs) and does a plain substring match over
 * each page's title + text. No dependencies; runs as an IIFE loaded with
 * `defer` from _includes/custom-head.html.
 *
 * Markup contract: each search widget is a [data-pf-site-search] container with
 * a [data-pf-search-input], [data-pf-search-results], and optional
 * [data-pf-search-status]. A legacy #siteSearchInput / #siteSearchResults form
 * is still supported as a fallback.
 */
(function () {
  "use strict";

  // HTML-escape a string by round-tripping it through a text node.
  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  // Resolve an index entry's URL against site.baseurl (empty for this site,
  // but kept so the widget also works under a project-page baseurl).
  function hrefFor(entry, base) {
    if (!entry || !entry.url) return "#";
    if (entry.url.startsWith("http")) return entry.url;
    var path = entry.url.startsWith("/") ? entry.url : "/" + entry.url;
    if (!base) return path;
    if (base.endsWith("/")) return base.replace(/\/$/, "") + path;
    return base + path;
  }

  // Locate the index: prefer the meta tag, else derive it from this script's src.
  function getIndexUrl() {
    var m = document.querySelector('meta[name="pasteflow-search-index"]');
    if (m && m.content) return m.content;
    var here = document.querySelector('script[src*="site-search"]');
    if (here && here.src) {
      return here.src.replace(/\/js\/site-search\.js(\?.*)?$/i, "/search-index.json");
    }
    return "";
  }

  function getBase() {
    var b = (document.querySelector('meta[name="pasteflow-baseurl"]') || {}).content;
    return typeof b === "string" ? b : "";
  }

  // Render results for query `q`. Header-nav widgets stay empty until the user
  // types; the standalone search page lists all pages when the box is empty.
  function renderInto(input, list, status, entries, q) {
    list.innerHTML = "";
    var needle = (q || "").trim().toLowerCase();
    var isHeaderNav = list.classList.contains("siteSearchResults--nav");

    if (!needle) {
      if (isHeaderNav) {
        if (status) status.hidden = true;
        return;
      }
      if (status) {
        status.hidden = false;
        status.textContent = "Showing all " + entries.length + " pages — keep typing to narrow results.";
      }
      entries.forEach(function (e) {
        var li = document.createElement("li");
        li.className = "siteSearchHit";
        li.innerHTML =
          '<a class="siteSearchHitLink" href="' +
          esc(hrefFor(e, getBase())) +
          '">' +
          esc(e.title) +
          "</a>";
        list.appendChild(li);
      });
      return;
    }

    var hits = entries.filter(function (e) {
      var hay = (e.title + " " + (e.text || "")).toLowerCase();
      return hay.indexOf(needle) !== -1;
    });

    if (status) {
      status.hidden = false;
      status.textContent = hits.length ? hits.length + " match(es)." : "No matches — try another word.";
    }

    hits.slice(0, 40).forEach(function (e) {
      var li = document.createElement("li");
      li.className = "siteSearchHit";
      var snip = (e.text || "").slice(0, 140);
      if ((e.text || "").length > 140) snip += "…";
      li.innerHTML =
        '<a class="siteSearchHitLink" href="' +
        esc(hrefFor(e, getBase())) +
        '">' +
        esc(e.title) +
        "</a>" +
        '<p class="siteSearchSnippet">' +
        esc(snip) +
        "</p>";
      list.appendChild(li);
    });
  }

  function wireWidget(root, entries) {
    var input = root.querySelector("[data-pf-search-input]");
    var list = root.querySelector("[data-pf-search-results]");
    var status = root.querySelector("[data-pf-search-status]");
    if (!input || !list) return;

    var debounceTimer;
    function render(q) {
      renderInto(input, list, status, entries, q);
    }

    render("");
    input.addEventListener("input", function () {
      clearTimeout(debounceTimer);
      var v = input.value;
      debounceTimer = setTimeout(function () {
        render(v);
      }, 120);
    });
  }

  // Fetch the index and wire every widget; on failure show an inline message.
  function loadEntriesThenInit() {
    var indexUrl = getIndexUrl();
    if (!indexUrl) return;

    fetch(indexUrl)
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (data) {
        var entries = data.entries || [];
        var roots = document.querySelectorAll("[data-pf-site-search]");
        if (roots.length) {
          roots.forEach(function (root) {
            wireWidget(root, entries);
          });
          return;
        }

        var input = document.getElementById("siteSearchInput");
        var list = document.getElementById("siteSearchResults");
        var status = document.getElementById("siteSearchStatus");
        if (!input || !list) return;
        wireWidget({ querySelector: function (sel) {
          if (sel === "[data-pf-search-input]") return input;
          if (sel === "[data-pf-search-results]") return list;
          if (sel === "[data-pf-search-status]") return status;
          return null;
        } }, entries);
      })
      .catch(function () {
        var roots = document.querySelectorAll("[data-pf-site-search]");
        var msg = "Could not load search index. Try refreshing the page.";
        if (roots.length) {
          roots.forEach(function (root) {
            var list = root.querySelector("[data-pf-search-results]");
            if (!list) return;
            list.innerHTML = "";
            var li = document.createElement("li");
            li.textContent = msg;
            list.appendChild(li);
          });
          return;
        }
        var list = document.getElementById("siteSearchResults");
        if (!list) return;
        list.innerHTML = "";
        var li = document.createElement("li");
        li.textContent = msg;
        list.appendChild(li);
      });
  }

  loadEntriesThenInit();
})();
