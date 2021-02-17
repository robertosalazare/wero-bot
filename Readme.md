# Bot del wero

## Dependencies
- node version 10+

## Commands
- **start:** starts the project
- **dev:** starts the project in watch mode
- **add-command:** generates a file for a new discord command, just run "npm run add-command <NEW_COMMAND>" and it will generate the file <REPO_PATH>/commands/<NEW_COMMAND>.js with the necessary code.

## Configuration
In order to start testing the bot you have to create a file called config.json and copy the content in config.example.json in it, then just add your bot token, check [this link](https://www.digitalocean.com/community/tutorials/how-to-build-a-discord-bot-with-node-js-es) if you dont know how to get a bot token. You can also change the prefix of the command, by default it is "!".

## How to run the project
```bash
git clone https://github.com/robertosalazare/wero-bot.git
cd wero-bot
npm install
npm run dev #This will run the bot in watch mode
```

## Bot invite link
[invite](https://discord.com/api/oauth2/authorize?client_id=811410551375659049&permissions=8&scope=bot)