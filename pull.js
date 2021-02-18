const express = require('express');
const config = require("./config.json");
const { exec } = require("child_process");
const app = express();
 
app.post('/', function (_, res) {
  exec("git pull", (error, stdout, stderr) => {
    if(error) {
      console.log(error);
      
      return res.status(500).send("Error pulling the repo");
    }

    if(stdout || stderr) {
      console.log(stdout || stderr);
    }

    return res.status(200).send('Pulled successfully');
  });
});
 
app.listen(config.PULL_PORT, () => console.log(`Server listening on port ${config.PULL_PORT}`));