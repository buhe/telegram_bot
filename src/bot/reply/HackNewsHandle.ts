import HackerNews from 'hackernews-api-ts';
import TelegramBot from "node-telegram-bot-api";
export const handleHackews = (bot: TelegramBot) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    return async (msg: any) => {
        const chatId = msg.chat.id;
        const hn =(await HackerNews.getTopStories(0, 1))[0];
        bot.sendMessage(chatId, hn.title + ":" + hn.url);
        // send back the matched "whatever" to the chat
    }

}