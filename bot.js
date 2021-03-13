const config = require("./config.json");
const client = require('./client');
const pipeline = require('./pipeline');

function WeroBot() {
  this.readMessage = (message) => {
    pipeline.evaluateMessage(message);
  }

  client.on("message", this.readMessage);

  this.start = () => {
    return client.login(config.BOT_TOKEN);
  };
}

const bot = new WeroBot();

module.exports = bot;