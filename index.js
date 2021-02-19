const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = config.PREFIX;
const commands = require("./commands");

client.on("message", function (message) {
  if (message.author.bot) return;
  if (message.content.toLowerCase() == 'same') message.channel.send(message.content);
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  const handler = commands[command];

  if(handler) {
    handler(message, args);
    message.react(config.REACTION); // reaction saved in config
  } else {
    message.channel.send('Puta madre no le sabes.');
  }
});

client.login(config.BOT_TOKEN)
  .then(() => console.log("⚡️ Wero bot is up ⚡️"));
