import TelegramBot from "node-telegram-bot-api";
const ysp = require("yahoo-stock-prices");
export const handleStock = async (bot: TelegramBot,id: string) => {
    try {
        const data = await ysp.getCurrentData('AAPL');
        bot.sendMessage(id, data);
    } catch(e) {
        console.log(e);
    } 
}

