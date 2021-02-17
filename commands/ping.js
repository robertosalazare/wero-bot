/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/

module.exports = function ping(message, args) {
  const channel = message.channel;

  channel.send("pong");
};
