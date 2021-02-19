const { default: axios } = require('axios');

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/
module.exports = function cat(message, args) {
  const channel = message.channel;

  axios.get("https://api.thecatapi.com/v1/images/search")
    .then(response => {
      const { url } = response.data[0];

      channel.send(url);
    });
}; 
