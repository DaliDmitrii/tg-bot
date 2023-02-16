const TelegramApi = require('node-telegram-bot-api');

const token = '6296397052:AAFpmLACrObMltEKAQcBlFNHOg1Bhd8bDek';

const bot = new TelegramApi(token, {polling: true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    await bot.sendMessage(chatId, 'Your message: ' + text);
});

