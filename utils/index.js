const fs = require("fs");
const { resolve } = require("path");

function readDirSyncRecursive(dir, results = []) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });

  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);

    if (dirent.isDirectory()) {
      readDirSyncRecursive(res, results);
    } else {
      results.push(res);
    }
  }
}

module.exports = { readDirSyncRecursive };
