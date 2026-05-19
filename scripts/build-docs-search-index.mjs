#!/usr/bin/env node
/**
 * Builds assets/search-index.json for the PasteFlow public support site.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const supportDir = path.join(root, "support");

const PAGES = [
  { file: "index.md", url: "/support/" },
  { file: "getting-started.md", url: "/support/getting-started/" },
  { file: "faq.md", url: "/support/faq/" },
  { file: "keyboard-shortcuts.md", url: "/support/keyboard-shortcuts/" },
  { file: "compatibility.md", url: "/support/compatibility/" },
  { file: "privacy.md", url: "/support/privacy/" },
  { file: "permissions.md", url: "/support/permissions/" },
  { file: "troubleshooting.md", url: "/support/troubleshooting/" },
  { file: "terms.md", url: "/support/terms/" },
  { file: "release-notes.md", url: "/support/release-notes/" },
  { file: "search.md", url: "/support/search/" }
];

function splitFrontMatter(raw) {
  if (!raw.startsWith("---\n")) return { front: "", body: raw };
  const end = raw.indexOf("\n---\n", 4);
  if (end === -1) return { front: "", body: raw };
  return { front: raw.slice(4, end), body: raw.slice(end + 5) };
}

function titleFromFront(front, fallback) {
  const m = front.match(/^title:\s*(.+)$/m);
  if (!m) return fallback;
  return m[1].replace(/^["']|["']$/g, "").trim() || fallback;
}

function plainTextFromMarkdown(body) {
  return body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`|]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 2400);
}

const entries = [];
for (const { file, url } of PAGES) {
  const full = path.join(supportDir, file);
  if (!fs.existsSync(full)) {
    console.warn(`skip missing: support/${file}`);
    continue;
  }
  const raw = fs.readFileSync(full, "utf8");
  const { front, body } = splitFrontMatter(raw);
  const fallbackTitle = file === "index.md" ? "Help center" : file.replace(/\.md$/, "").replace(/-/g, " ");
  const title = titleFromFront(front, fallbackTitle);
  entries.push({ title, url, text: plainTextFromMarkdown(body) });
}

const outPath = path.join(root, "assets", "search-index.json");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(
  outPath,
  `${JSON.stringify({ generated: new Date().toISOString(), entries }, null, 2)}\n`,
  "utf8",
);
console.log(`Wrote ${entries.length} entries → assets/search-index.json`);
