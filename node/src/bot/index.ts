import TelegramBot from "node-telegram-bot-api";
const token = '1564411909:AAFQNbZAskm-aH_-hsjmHjJL8E1Vlr75j74';
const bot: TelegramBot = new TelegramBot(token, { polling: true });
import { exec } from "shelljs";
export async function botStart()  {
    // Matches "/echo [whatever]"
    bot.onText(/\/cpu/, (msg, match) => {
        // 'msg' is the received Message from Telegram
        // 'match' is the result of executing the regexp above on the text content
        // of the message

        const chatId = msg.chat.id;
        const temp: string = exec("/opt/vc/bin/vcgencmd measure_temp"); // the captured "whatever"
        bot.sendMessage(chatId, JSON.stringify({ temp }));
        // send back the matched "whatever" to the chat

    });
};  
