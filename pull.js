const express = require('express');
const config = require("./config.json");
const { exec } = require("child_process");
const app = express();
 
app.post('/', function (_, res) {
  exec("git pull", (error, stdout, stderr) => {
    if(error || stderr) {
      console.log(error || stderr);
      
      return res.status(500).send("Error pulling the repo");
    }

    if(stdout) {
      console.log(stdout);
    }

    return res.status(200).send('Pulled successfully');
  });
});
 
app.listen(config.PULL_PORT, () => console.log(`Server listening on port ${config.PULL_PORT}`));