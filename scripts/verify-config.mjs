import fs from "fs";
import path from "path";

const requiredFiles = [
  "postcss.config.mjs",
  "next.config.mjs",
  "package.json",
];

const missing = requiredFiles.filter(
  (file) => !fs.existsSync(path.join(process.cwd(), file)),
);

if (missing.length > 0) {
  console.error("Missing required project files:", missing.join(", "));
  process.exit(1);
}
