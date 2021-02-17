const yargs = require("yargs");
const fs = require("fs");

const options = yargs
 .option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
 .argv;

const name = options.name;

const commandContent = `
/**
 * @argument {import('discord.js').Message} message
 * @argument {Array<any>} args
*/

module.exports = function ${name}(message, args) {
  const channel = message.channel;

  channel.send("${name}");
}; 
`;

fs.writeFile(`${__dirname}/commands/${name}.js`, commandContent, 'utf8', function(err) {
  if(!err) {
    console.log(`Command file generated correcly in ${__dirname}\\${name}.js`);
  } else {
    console.error('Unexpected error creating the command, the file have not been generated...');
  }
});