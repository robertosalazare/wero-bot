const { disconnect } = require('./a')

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/

module.exports = function kyt(message, args) {
  const channel = message.channel;

  disconnect();
}; 
