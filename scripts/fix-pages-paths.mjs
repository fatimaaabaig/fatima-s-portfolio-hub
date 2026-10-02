
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = ".output/public";
const prefix = "/fatima-s-portfolio-hub";

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walk(file);
      continue;
    }

    if (!/\.(html|js|css|json|webmanifest)$/i.test(entry.name)) {
      continue;
    }

    let content = await readFile(file, "utf8");

    content = content
      .replace(/(["'(=])\/assets\//g, `$1${prefix}/assets/`)
      .replace(/(["'(=])\/fatima-baig-portrait\.png/g, `$1${prefix}/fatima-baig-portrait.png`)
      .replace(/(["'(=])\/favicon\.ico/g, `$1${prefix}/favicon.ico`);

    await writeFile(file, content);
  }
}

await walk(root);

console.log("GitHub Pages paths updated successfully!");