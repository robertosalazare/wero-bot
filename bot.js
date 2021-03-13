const config = require("./config.json");
const commands = require("./commands");
const client = require('./client');
const { sampleArr }  = require("./utils");
// const yargs = require("yargs");

const truthOptions = ['truuuuuu', 'not tru', 'false', 'not false'];
const truthRegex = /^((not\s+)?(tru+e*|false))$/i;

function WeroBot() {
  this.prefix = config.PREFIX;
  this.reaction = config.REACTION;

  this.evaluateMessage = (message) => {
    if (message.author.bot) return;
    if (message.content.toLowerCase() == "same")
      message.channel.send(message.content);
    if (truthRegex.test(message.content))
      message.channel.send(sampleArr(truthOptions));
    if (!message.content.startsWith(this.prefix)) return;

    const commandBody = message.content.slice(this.prefix.length);
    const args = commandBody.split(" ");
    const command = args.shift().toLowerCase();
    // const parsed = yargs.parse(commandBody);
    // console.log(parsed);
    const handler = commands[command];
  
    if (handler) {
      handler(message, args);
      message.react(this.reaction); // reaction saved in config
    } else {
      message.channel.send("Puta madre no le sabes.");
    }
  }

  client.on("message", this.evaluateMessage);

  this.start = () => {
    return client.login(config.BOT_TOKEN);
  };
}

const bot = new WeroBot();

module.exports = {
  bot,
  client,
};