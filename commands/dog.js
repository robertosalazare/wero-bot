const axios = require('axios').default;

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/
module.exports = function dog(message, args) {
  const channel = message.channel;

  axios.get('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
      const { message: url } = response.data;

      channel.send(url);
    });
};
