const { allAudios } = require("../utils");

let stfu = null;
let timer = null;

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
 */
async function audio(message, args, variables) {
  if (message.member.voice.channel) {
    const [audio] = args;

    if (!audio) {
      return message.channel.send("Manda el nombre de un audio puta.");
    }
  
    clearTimeout(timer);

    const availableAudios = allAudios();
    if (!availableAudios.includes(audio.toString())) {
      return message.channel.send("No ta ese audio puta.");
    }

    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play(`${__dirname}/../audio/${audio}.mp3`);

    stfu = () => connection.disconnect(),
    timer = setTimeout(stfu, 60000);

    dispatcher.on("error", (err) => {
      console.log(err);
      message.channel.send("Error reproduciendo el audio");
    });
  } else {
    message.channel.send("No estas en un chat de voz puta.");
  }
}

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
  channel.send("Help message for a");
}

function disconnect() {
  if (stfu) {
    stfu();
    clearTimeout(timer);
    stfu = null;
  }
}

module.exports = {
  handler: audio,
  disconnect,
  validate,
  help,
};
