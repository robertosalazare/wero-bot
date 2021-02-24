const axios = require('axios').default;

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/
module.exports = function dog(message, args) {
  const channel = message.channel;

  axios.get('https://meme-api.herokuapp.com/gimme')
    .then((response) => {
      const { url: url } = response.data;

      channel.send(url);
    });
};
