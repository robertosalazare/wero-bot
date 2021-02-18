const { allAudios } = require("../utils");

/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/
module.exports = async function audio(message, args) {
  if (message.member.voice.channel) {
    const [audio] = args;

    if(!audio) {
      return message.channel.send('Manda el nombre de un audio puta.');
    }

    const availableAudios = allAudios();
    if(!availableAudios.includes(audio)) { return message.channel.send('No ta ese audio puta.'); }

		const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play(`${__dirname}/../audio/${audio}.mp3`);

    dispatcher.on('error', (err) => {
      console.log(err);
      message.channel.send('Error reproduciendo el audio');
    });
	} else {
    message.channel.send("No estas en un chat de voz puta.");
  }
};
