const { disconnect } = require('./a')

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/

function kyt() {
  disconnect();
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
  channel.send("Help message for kyt");
}

module.exports = {
  handler: kyt,
  validate,
  help,
};
