import TelegramBot from "node-telegram-bot-api";
export const handleHelp = (bot: TelegramBot) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    return (msg: any) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, '/cpu\n/sex');
        // send back the matched "whatever" to the chat
    }

}