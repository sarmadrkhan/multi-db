const fs = require("fs");
const path = require("path");

const envPath = path.resolve(process.cwd(), ".env");
const examplePath = path.resolve(process.cwd(), ".env.example");

if (fs.existsSync(envPath)) {
  console.log(".env already exists");
  process.exit(0);
}

if (!fs.existsSync(examplePath)) {
  console.error(".env.example not found. Please copy from the repo if not available already.");
  process.exit(1);
}

fs.copyFileSync(examplePath, envPath);
console.log(".env created from .env.example");
