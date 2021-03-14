const { readDirSyncRecursive } = require("../utils");

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/
function commands(message, args) {
  const channel = message.channel;

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

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
 */
function validate(message, args, variables) {
  return false;
}

/**
 * @argument {import('discord.js').Message} message
 */
function help(message) {
  const channel = message.channel;
  channel.send("Help message for commands");
}

module.exports = {
  handler: commands,
  validate,
  help,
};
