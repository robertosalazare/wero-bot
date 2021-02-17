const { readDirSyncRecursive } = require("../utils");
const commands = {};

const files = [];
readDirSyncRecursive(__dirname, files);

files.forEach((file) => {
  const fileName = file.split(/\/|\\/).pop();

  if (fileName !== "index.js") {
    const name = fileName.split(".").shift();
    let dir = file.split("/");
    dir.pop();
    dir = dir.join("/");

    const handler = require(file);
    commands[name] = handler;
  }
});

module.exports = commands;
