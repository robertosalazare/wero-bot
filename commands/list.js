
/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/
const { allAudios } = require("../utils");

module.exports = function listAudio(message, args) {
  const audios = allAudios();

  message.channel.send("Wacha puta, todos los audios son:\n" + audios.join('\n'));
};
