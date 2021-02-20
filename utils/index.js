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

function allAudios() {
  const files = [];
  readDirSyncRecursive(__dirname + "/../audio", files);
  
  const audios = [];
  files.forEach((file) => {
    const fileName = file.split(/\/|\\/).pop();

    const name = fileName.split(".").shift();
    
    audios.push(name);
  });

  return audios;
}

function sampleArr(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

module.exports = { readDirSyncRecursive, allAudios, sampleArr };
