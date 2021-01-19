import TelegramBot from "node-telegram-bot-api";
import { getHotSearchList } from "../weibo/sdk";
export const handleWeibo = (bot: TelegramBot) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    return async (msg: any) => {
        const chatId = msg.chat.id;
        const r = await getHotSearchList();
        r.forEach(e => {
            bot.sendMessage(chatId, e.text + ':' + e.link);
        })
        
        // send back the matched "whatever" to the chat
    }

}