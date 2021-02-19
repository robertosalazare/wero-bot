const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = config.PREFIX;
const commands = require("./commands");

const truthOptions = ['truuuuuu', 'not tru', 'false', 'not false'];
const truthRegex = /^((not\s+)?(tru+e*|false))$/i;

function sampleArr(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

client.on("message", function (message) {
  if (message.author.bot) return;
  if (message.content.toLowerCase() == "same")
    message.channel.send(message.content);
  if (truthRegex.test(message.content))
    message.channel.send(sampleArr(truthOptions))
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  const handler = commands[command];

  if (handler) {
    handler(message, args);
    message.react(config.REACTION); // reaction saved in config
  } else {
    message.channel.send("Puta madre no le sabes.");
  }
});

client
  .login(config.BOT_TOKEN)
  .then(() => console.log("⚡️ Wero bot is up ⚡️"));
