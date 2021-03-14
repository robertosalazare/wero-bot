
/**
 * @argument {import('discord.js').Message} message
*/
function lesabes(message) {
  const channel = message.channel;

  channel.send("Puta madre le sabes demasiado");
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
  channel.send("Help message for lesabes");
}

module.exports = {
  handler: lesabes,
  validate,
  help,
};
