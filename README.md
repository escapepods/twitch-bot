# twitch-bot
Nodejs Twitch Bot for Beginners

### Installation & Prerequisites
It goes without saying that this application will not run without Nodejs installed.

Simply clone the repository, navigate to the directory via Terminal/Command Line, and run `npm install`. This will direct npm to install the necessary components outlined in package.json. As you add more components, you'll have an updated package file that will allow convenient setup in the future.

Afterwards, create a Twitch account for your bot and visit https://twitchapps.com/tmi/ to generate an Oauth token. This token will be required to connect your bot to Twitch IRC. With your bot's newly-generated credentials, update app.js to reflect these changes. I've outlined the areas where this is to be done. 

If you have any issues, see the Issues section below.

### Running the bot
While in the bot's directory, simply run the command: `node app.js`. Press `CTRL+C` to exit the application.

### Issues
If you're having troubles getting the bot started or need some further guidance on where to go next, feel free to join my Discord: https://discord.gg/perPvGw

### Additional Documentation
To learn more about what you can do with this bot, please read [the tmi.js docs here](https://docs.tmijs.org/v1.3.0/index.html). This bot is based on a community-driven version of tmi.js called twitch-js. The documentation listed is compatible with the current version and should give you some excellent references for future development. If you decide to break off from the stable version of twitch-js and use a beta version, you'll need to consult their documentation for how to build a bot using the new module.
