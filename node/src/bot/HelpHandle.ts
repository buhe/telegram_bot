import TelegramBot from "node-telegram-bot-api";
export const handleHelp = (bot: TelegramBot) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    return (msg: any) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, '/cpu Cpu 温度\n/sex 一些你懂的小图片\n/github 一些项目\n/weibo 随机返回一个微博热搜\n/news 返回第一个 HackNews\n/porn 随机返回一个 Pornhub 的视频');
        // send back the matched "whatever" to the chat
    }

}