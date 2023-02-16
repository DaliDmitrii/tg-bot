const TelegramApi = require('node-telegram-bot-api');
require("dotenv").config();

const token = process.env.TOKEN;

const bot = new TelegramApi(token, {polling: true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    await bot.sendMessage(chatId, `Your message: ${text} was received`);
});

