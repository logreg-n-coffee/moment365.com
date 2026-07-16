import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const outDir = path.join(process.cwd(), "out");
const localizedRoots = {
  de: { lang: "de", dir: "ltr" },
  es: { lang: "es", dir: "ltr" },
  fr: { lang: "fr", dir: "ltr" },
  ja: { lang: "ja", dir: "ltr" },
  "zh-hans": { lang: "zh-Hans", dir: "ltr" },
  ar: { lang: "ar", dir: "rtl" },
};
const generatedTextExtensions = new Set([".css", ".html", ".js", ".json", ".txt", ".xml", ".webmanifest"]);

async function exportDocuments(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory()
        ? exportDocuments(entryPath)
        : entryPath.endsWith(".html") || entryPath.endsWith(".txt")
          ? [entryPath]
          : [];
    }),
  );

  return nested.flat();
}

for (const [locale, attributes] of Object.entries(localizedRoots)) {
  const files = await exportDocuments(path.join(outDir, locale));
  let htmlRootsLocalized = 0;
  let routerPayloadsLocalized = 0;

  if (files.length === 0) {
    throw new Error(`No exported documents found for ${locale}.`);
  }

  for (const file of files) {
    const source = await readFile(file, "utf8");
    const rawRoot = `["$","html",null,{"lang":"en"`;
    const escapedRoot = `[\\"$\\",\\"html\\",null,{\\"lang\\":\\"en\\"`;
    const localizedRawRoot = `["$","html",null,{"lang":"${attributes.lang}","dir":"${attributes.dir}"`;
    const localizedEscapedRoot = `[\\"$\\",\\"html\\",null,{\\"lang\\":\\"${attributes.lang}\\",\\"dir\\":\\"${attributes.dir}\\"`;
    let localized = source.replace(
      /<html([^>]*?)lang="en"([^>]*)>/,
      `<html$1lang="${attributes.lang}" dir="${attributes.dir}"$2>`,
    );
    if (localized !== source) htmlRootsLocalized += 1;

    const beforePayloads = localized;
    localized = localized.replaceAll(rawRoot, localizedRawRoot).replaceAll(escapedRoot, localizedEscapedRoot);
    if (localized !== beforePayloads) routerPayloadsLocalized += 1;

    if (localized !== source) {
      await writeFile(file, localized);
    }
  }

  if (htmlRootsLocalized === 0 || routerPayloadsLocalized === 0) {
    throw new Error(`Could not fully localize exported document state for ${locale}.`);
  }
}

async function generatedTextFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory()
        ? generatedTextFiles(entryPath)
        : generatedTextExtensions.has(path.extname(entry.name))
          ? [entryPath]
          : [];
    }),
  );

  return nested.flat();
}

for (const file of await generatedTextFiles(outDir)) {
  const source = await readFile(file, "utf8");
  const normalized = source.replace(/[ \t]+$/gm, "");
  if (normalized !== source) await writeFile(file, normalized);
}

console.log("Localized document language and direction in the static export.");
