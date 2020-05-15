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
const channel = "twitch_channel_name"

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
        username: "your_bot_username",

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

    // Set up a singular message function
    function sendMessage(a) {
        client.say(channel, `${a}`)
        // Promise
        .then((data) => {
            // Log promise response to console
            console.log(`${message} resolved successfully on channel ${data[0]}. Response: ${data[1]}`);
        }).catch((err) => {
            // Log errors
            console.log(`${message} rejected. Reason: ${err}`);
        });
    }
    
    // If command = !greet
    if (message == "!greet") {
        // Send username and HeyGuys emote to the sendMessage Function for delivery
        sendMessage(`${userstate['display-name']} HeyGuys`);
    }
    
    // Add additional if statements here

    
    
    // Do not add if statements beyond this comment
    
});

// Once connected, do the following
client.on('connected', function (address, port) {

    // Console.log a connection confirmation message
    console.log(`Connected to Twitch on ${address}:${port}`);

});
