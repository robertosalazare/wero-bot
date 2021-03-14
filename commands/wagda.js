const { default: axios } = require('axios');

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/
function cat(message, args) {
  const channel = message.channel;

  axios.get("https://api.thecatapi.com/v1/images/search")
    .then(response => {
      const { url } = response.data[0];

      channel.send(url);
    });
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
  channel.send("Help message for wagda");
}

module.exports = {
  handler: cat,
  validate,
  help,
};
