'use strict';

const config = require('./settings/config.json');
const watchChannel = require('./settings/watch-channel.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const { IncomingWebhook } = require('@slack/webhook');

const slackwebhookurl = config.slackwebhook;
const webhook = new IncomingWebhook(slackwebhookurl);


client.login(config.discordBotToken);
client.on('ready', () => {
    console.log('Logged in successfully')
});

client.on('message', message => {
    (async () => {
        await webhook.send(
            {
                "text": message.content
            }
        );
    })();
})