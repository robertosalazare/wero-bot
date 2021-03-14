const { allAudios } = require("../utils");

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/
function listAudio(message, args) {
  const audios = allAudios();

  message.channel.send("Wacha puta, todos los audios son:\n" + audios.join('\n'));
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
  channel.send("Help message for list");
}

module.exports = {
  handler: listAudio,
  validate,
  help,
};
