const client = require('../client');

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/

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
  channel.send("Help message for clear");
}

async function clear(message, args) {
  const channel = message.channel;

  const messages = await channel.messages.fetch({
    limit: 100
  });

  const promises = [];

  messages.forEach(message => {
    if(message.author.id === client.user.id) {
      promises.push(message.delete());
    }
  });

  const deletingMessage = await channel.send(`Eliminando mensajes...`);

  try {
    await Promise.all(promises);
    await deletingMessage.edit(`Se eliminaron los mensajes`);
  } catch (error) {
    deletingMessage.edit(`Error borrando los mensajes`);
  }
};

module.exports = {
  handler: clear,
  validate,
  help,
};
