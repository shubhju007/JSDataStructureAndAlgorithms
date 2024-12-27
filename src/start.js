import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const fileName = process.argv[2];

if (!fileName) {
  console.error(
    "❌ Please provide a file name to run, e.g., npm run start filename.ts"
  );
  process.exit(1);
}

// Search for the file recursively
async function findFile(startDir, targetFile) {
  const files = await fs.promises.readdir(startDir);

  for (const file of files) {
    const fullPath = path.join(startDir, file);
    const stat = await fs.promises.stat(fullPath);

    if (stat.isDirectory()) {
      const found = await findFile(fullPath, targetFile);
      if (found) return found;
    } else if (file === targetFile) {
      return fullPath;
    }
  }
  return null;
}

const filePath = await findFile("./", fileName);

if (!filePath) {
  console.error(`❌ File "${fileName}" not found!`);
  process.exit(1);
}

// Run the file using tsx
execSync(`npx tsx ${filePath}`, { stdio: "inherit" });
