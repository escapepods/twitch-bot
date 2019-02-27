/*
Aron Ben David - Twitch Bot
https://github.com/escapepods/twitch-bot
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

const TwitchJS = require('twitch-js')

// You can connect to multiple channels, separate them with a comma
// example: "channel_1, channel2, channel_3"
const channel = "your_twitch_channel"

// Set options for connecting to Twitch IRC
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
        username: "your_bot_twitch_account_name",

        // visit https://twitchapps.com/tmi/ while logged in as bot to generate oauth token
        password: "oauth:your_oauth_token"
    },
    channels: [`${channel}`]
};

// Connect to Twitch IRC
const client = new TwitchJS.client(options);
client.connect();

// Monitor chat for incoming messages
client.on('chat', (channel, userstate, message, self) => {

    // If someone sends !ping in chat, reply with pong!
    if (message == "!ping") {
        client.say(channel, "pong!")
        .then(() => {
        }).catch((err) => {
            console.log(err);
        });
    }

    // If someone sends "Hello" or "hello", reply to the user
    if ((message.startsWith("Hello")) || (message.startsWith("hello"))) {
        client.say(channel, `${userstate['display-name']} HeyGuys`)
        .then(() => {
        }).catch((err) => {
            console.log(err);
        });
    }
    
    // Add additional if statements here

    
    
    // Do not add if statements beyond this comment
    
});

// Once connected, do the following
client.on('connected', function (address, port) {

    // Console.log a connection confirmation message
    console.log(`Connected to Twitch on ${address}:${port}`);

});
