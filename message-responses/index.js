const { sampleArr }  = require("../utils");

const truthOptions = ['truuuuuu', 'not tru', 'false', 'not false'];
const truthRegex = /^((not\s+)?(tru+e*|false))$/i;

const evaluateResponse = (message) => {
  if (message.author.bot) return;
  if (message.content.toLowerCase() == "same")
    message.channel.send(message.content);
  if (truthRegex.test(message.content))
    message.channel.send(sampleArr(truthOptions));
}

module.exports = evaluateResponse;