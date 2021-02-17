/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/

module.exports = function ping(message, args) {
  const channel = message.channel;

  const numArgs = args.map((x) => parseFloat(x));
  const sum = numArgs.reduce((counter, x) => (counter += x));
  channel.send(`The sum of all the arguments you provided is ${sum}!`);
};
