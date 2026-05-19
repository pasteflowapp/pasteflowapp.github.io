---
layout: default
title: Search
nav_order: 8
---

# Search the docs

Use the box below to filter every help page. The same search field also appears in the **site header** on every page.

<p class="searchIntro">Try <strong>human</strong>, <strong>license</strong>, <strong>Google Docs</strong>, or <strong>snippet</strong>.</p>

<div data-pf-site-search class="siteSearchBox">
  <label for="pfSearchPageInput" class="siteSearchLabel visually-hidden">Filter pages</label>
  <input
    id="pfSearchPageInput"
    type="search"
    data-pf-search-input
    class="siteSearchInput"
    placeholder="Type to filter pages…"
    autocomplete="off"
    spellcheck="false"
    aria-label="Filter help pages"
  />
  <ul data-pf-search-results class="siteSearchResults" aria-live="polite"></ul>
  <p data-pf-search-status class="siteSearchStatus" hidden></p>
</div>
