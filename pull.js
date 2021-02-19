const express = require('express');
const config = require("./config.json");
const { exec } = require("child_process");
const { unlinkSync, existsSync } = require('fs');
const { restart } = require('nodemon');
const app = express();
 
function execPromise(command) {
  return new Promise(function (resolve, reject) {
    exec(command, (error, stdout, stderr) => {
      if(error) { reject(error); }
  
      resolve(stdout || stderr);
    });
  });
}

app.post('/', async function (_, res) {
  try {
    if(existsSync(`${__dirname}/package-lock.json`)) {
      unlinkSync(`${__dirname}/package-lock.json`);
      console.log('Deleted package json');
    }

    const installOut = await execPromise("npm install");
    console.log(installOut);

    const pullOut = await execPromise("git pull");
    console.log(pullOut);

    const restartOut = await execPromise("pm2 restart wero-bot");
    console.log(restartOut);

    return res.status(200).send('Pulled successfully');
  } catch (error) {
    console.log(error);
      
    return res.status(500).send("Error pulling the repo");
  }
});
 
app.listen(config.PULL_PORT, () => console.log(`Server listening on port ${config.PULL_PORT}`));