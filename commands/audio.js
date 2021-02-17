/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/

module.exports = async function audio(message, args) {
  if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
    console.log(__dirname);
	} else {
    message.channel.send("No estas en un chat de voz puta.");
  }
}; 
