const axios = require('axios').default;

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/
function dog(message, args) {
  const channel = message.channel;

  axios.get('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
      const { message: url } = response.data;

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
  channel.send("Help message for dog");
}

module.exports = {
  handler: dog,
  validate,
  help,
};
