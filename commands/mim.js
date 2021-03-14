const axios = require('axios').default;

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/
function mim(message, args) {
  const channel = message.channel;
  let memeApi = 'https://meme-api.herokuapp.com/gimme/';

  if (args.length > 0) memeApi += args[0];

  axios.get(memeApi)
    .then((response) => {
      const { url: url, nsfw: nsfw } = response.data;

      if (nsfw && !message.channel.nsfw) {
        channel.send('Canal cristiANO :)');
        return
      }

      channel.send(url)
    }).catch((error) => {
      channel.send("No encontre imagenes en ese subreddit :)");
      console.log(error.response.data.message);
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
  channel.send("Help message for mim");
}

module.exports = {
  handler: mim,
  validate,
  help,
};
