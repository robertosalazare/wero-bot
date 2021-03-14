const { allAudios } = require("../utils");

let stfu = null;
let timer = null;

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
 */
async function audio(message, args, variables) {
  if (message.member.voice.channel) {
    let [audio] = args;
    
    if(variables.name) { audio = variables.name; }

    clearTimeout(timer);

    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play(`${__dirname}/../audio/${audio}.mp3`);

    stfu = () => connection.disconnect(),
    timer = setTimeout(stfu, 60000);

    dispatcher.on("error", (err) => {
      console.log(err);
      message.channel.send("Error reproduciendo el audio");
    });
  } else {
    message.channel.send("No estas en un chat de voz.");
  }
}

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
 */
function validate(message, args, variables) {
  let [audio] = args;

  if(variables.name) { audio = variables.name; }

  const channel = message.channel;
  const availableAudios = allAudios();

  if(!audio) {
    channel.send(`Porfavor manda el nombre de un audio`);

    return true;
  } else if(!availableAudios.includes(audio.toString())) {
    message.channel.send(`
Audio incorrecto, los audios disponibles son:
${availableAudios.join(', ')}
      `);

    return true;
  }

  return false;
}

/**
 * @argument {import('discord.js').Message} message
 */
function help(message) {
  const channel = message.channel;
  const audios = allAudios();

  channel.send(`
El comando 'a' reproduce un audio el chat que te encuentres actualmente. Los audios disponibles actualmente son:
${audios.join(', ')}

ejemplos de como usar el comando:
?a <NOMBRE_DEL_AUDIO>
?a --name <NOMBRE_DEL_AUDIO>
  `);
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
