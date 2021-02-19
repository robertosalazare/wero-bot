const { readDirSyncRecursive } = require("../utils");

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/
module.exports = function commands(message, args) {
  const channel = message.channel;
  /*console.log(c);
  const commandNames = Object.keys(c);*/

  const files = [], commandNames = [];
  readDirSyncRecursive(__dirname, files);

  files.forEach((file) => {
    const fileName = file.split(/\/|\\/).pop();

    if (fileName !== "index.js") {
      const name = fileName.split(".").shift();
      commandNames.push(name);
    }
  });

  channel.send("Wacha puta, todos los comandos son:\n" + commandNames.join('\n'));
};
