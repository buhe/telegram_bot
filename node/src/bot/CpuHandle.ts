import TelegramBot from "node-telegram-bot-api";
import { exec } from "shelljs";
export const handleCpu = (bot: TelegramBot ) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    return (msg: any) =>{
        const chatId = msg.chat.id;
        const temp: string = exec("/opt/vc/bin/vcgencmd measure_temp"); // the captured "whatever"
        bot.sendMessage(chatId, temp.toString() + "_" + chatId);
    // send back the matched "whatever" to the chat
    }

}