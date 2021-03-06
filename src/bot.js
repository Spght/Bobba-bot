import { config } from 'dotenv';
config({ path: '.env'});

import { Client, Intents } from 'discord.js';

const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });


bot.on('ready', () => console.log(`${bot.user.username} is online`));
bot.on('message', async (msg) => {
    if (msg.author.bot) return;

    await msg.reply('hi');
});

bot.login(process.env.BOT_TOKEN);
