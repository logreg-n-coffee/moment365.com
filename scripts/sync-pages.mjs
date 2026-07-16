import { access, cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const outDir = path.join(root, "out");
const docsDir = path.join(root, "docs");

await access(path.join(outDir, "index.html"));
await rm(docsDir, { recursive: true, force: true });
await mkdir(docsDir, { recursive: true });
await cp(outDir, docsDir, { recursive: true });

console.log("Synced the static export to docs/ for GitHub Pages.");
