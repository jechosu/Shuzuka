require('dotenv').config();
const { Client, IntentsBitField, Collection } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { Intents} = require('discord.js');
const { Player } = require("discord-player");


const fs = require("node:fs");
const path = require("node:path");



const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildVoiceStates,
    ]
});


client.on('ready', (c) => {
    client.user.setPresence({ activity: { name: 'stable build' }, status: 'online' });
    console.log(`${c.user.username} is online!`);
});
// username can be changed from c.user.tag to .username or .id

client.on('messageCreate', (message) => {
    //   console.log(message.content);

    if (message.author.bot) {
        return;
    }
    if (message.content === 'hello') {
        if (message.author.id === '821869110056321055') {
            console.log(`${message.author.id} has spoken`);
            message.reply('Hello, my creator.');
        } //else if (message.author.id === '797942312826961964') {
            //console.log(`${message.author.id} has spoken`);
            // message.reply('Hello, pheri.');
        // }
        else 
            message.reply(`hello, <@${message.author.id}> `);
    }
});

client.login(process.env.TOKEN);
