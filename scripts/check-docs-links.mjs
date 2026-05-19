#!/usr/bin/env node
/**
 * Validates Markdown links in support/*.md (public PasteFlow help site).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const supportDir = path.join(root, "support");

const SITE_PATH_TO_FILE = new Map([
  ["/support/", "index.md"],
  ["/support/getting-started/", "getting-started.md"],
  ["/support/faq/", "faq.md"],
  ["/support/keyboard-shortcuts/", "keyboard-shortcuts.md"],
  ["/support/compatibility/", "compatibility.md"],
  ["/support/privacy/", "privacy.md"],
  ["/support/permissions/", "permissions.md"],
  ["/support/troubleshooting/", "troubleshooting.md"],
  ["/support/terms/", "terms.md"],
  ["/support/release-notes/", "release-notes.md"],
  ["/support/search/", "search.md"]
]);

const SINGLE_SEGMENT_JEKYLL_FOOTGUN = /^[a-z][a-z0-9-]*\/(#.*)?$/;
const MD_LINK_RE = /\[([^\]]*)\]\(([^)]+)\)/g;

function listSupportMd() {
  if (!fs.existsSync(supportDir)) return [];
  return fs
    .readdirSync(supportDir, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => path.join(supportDir, e.name))
    .sort();
}

function lineAtIndex(content, index) {
  return content.slice(0, index).split("\n").length;
}

function shouldSkipTarget(raw) {
  const t = raw.trim();
  return !t || t.startsWith("mailto:") || t.startsWith("http") || t.startsWith("#");
}

function isJekyllLiquid(t) {
  return t.includes("{{") && t.includes("relative_url");
}

function pathPart(t) {
  return t.split("#")[0].split("?")[0].trim();
}

function extractQuotedPaths(t) {
  const paths = [];
  const blockRe = /\{\{[\s\S]*?\}\}/g;
  let m;
  while ((m = blockRe.exec(t)) !== null) {
    const qRe = /(['"])\/([^'"]*)\1/g;
    let q;
    while ((q = qRe.exec(m[0])) !== null) paths.push("/" + q[2]);
  }
  return paths;
}

function normalizeSitePath(sitePath) {
  const clean = sitePath.split("?")[0].split("#")[0].trim();
  if (!clean || clean === "/") return "/";
  return clean.endsWith("/") ? clean : `${clean}/`;
}

function docsPathExistsForSitePath(sitePath) {
  const norm = normalizeSitePath(sitePath);
  if (norm.startsWith("/support/") && norm.includes("#")) {
    return docsPathExistsForSitePath(norm.split("#")[0]);
  }
  const mapped = SITE_PATH_TO_FILE.get(norm);
  if (mapped) return fs.existsSync(path.join(supportDir, mapped));
  if (norm === "/support/") return fs.existsSync(path.join(supportDir, "index.md"));
  const slug = norm.replace(/^\/support\//, "").replace(/\/$/, "");
  if (slug && !slug.includes("/")) {
    return fs.existsSync(path.join(supportDir, `${slug}.md`));
  }
  return false;
}

function checkFile(filePath, errors) {
  const isIndex = path.basename(filePath) === "index.md";
  const content = fs.readFileSync(filePath, "utf8");
  let m;
  MD_LINK_RE.lastIndex = 0;
  while ((m = MD_LINK_RE.exec(content)) !== null) {
    const target = m[2];
    const line = lineAtIndex(content, m.index);
    if (shouldSkipTarget(target)) continue;
    const pp = pathPart(target);
    if (isJekyllLiquid(target)) {
      for (const p of extractQuotedPaths(target)) {
        const base = p.split("#")[0];
        if (base && !docsPathExistsForSitePath(base)) {
          errors.push(`${filePath}:${line} missing page for ${JSON.stringify(base)}`);
        }
      }
      continue;
    }
    if (!isIndex && SINGLE_SEGMENT_JEKYLL_FOOTGUN.test(pp)) {
      errors.push(`${filePath}:${line} forbidden relative [${m[1]}](${target})`);
    }
  }
}

const errors = [];
for (const f of listSupportMd()) checkFile(f, errors);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`check-docs-links: OK (${listSupportMd().length} files)`);
}
