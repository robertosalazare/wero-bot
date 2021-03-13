const { readDirSyncRecursive } = require("../utils");
const config = require("../config.json");
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

const prefix = config.PREFIX;
const reaction = config.REACTION;

const evaluateCommand = (message) => {
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();
  const handler = commands[command];

  if (handler) {
    handler(message, args);
    message.react(reaction);
  } else {
    message.channel.send("Puta madre no le sabes.");
  }
}

module.exports = evaluateCommand;
