const TwitchJS = require('twitch-js')

// You can connect to multiple channels, separate them with a comma
// example: "channel_1, channel2, channel_3"
const channel = "twitch_channel_name"

// Set options for connecting to Twitch Services
let options = {
    options: {
        debug: true
    },
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        // Create a Twitch account for the bot
        username: "bot_account_name",
        // visit https://twitchapps.com/tmi/ while logged in as bot to generate oauth token
        password: "oauth:your_token"
    },
    channels: [`${channel}`]
};

// Connect to Twitch Services
const client = new TwitchJS.client(options);
client.connect();

// Monitor chat for incoming messages
client.on('chat', (channel, userstate, message, self) => {

    // If someone sends !ping in chat, reply with pong!
    if (message == "!ping") {
        client.say(channel, "pong!");
    };

    // If someone sends "Hello" or "hello", reply to the user
    if ((message.startsWith("Hello")) || (message.startsWith("hello"))) {
        client.say(channel, `${userstate['display-name']} HeyGuys`);
    };

});

// Once connected, do the following
client.on('connected', function (address, port) {

    // Console.log a connection confirmation message
    console.log(`Connected to Twitch on ${address}:${port}`);

});
