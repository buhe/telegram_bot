import TelegramBot from "node-telegram-bot-api";
const token = '1564411909:AAFQNbZAskm-aH_-hsjmHjJL8E1Vlr75j74';
const bot: TelegramBot = new TelegramBot(token, { polling: true });
import { handleCpu } from "./CpuHandle";
import { handleHelp } from "./HelpHandle";
import { handleSexImg } from "./SexImgHandle";
export async function botStart()  {
    bot.onText(/\/cpu/, handleCpu(bot));
    bot.onText(/\/sex/, handleSexImg(bot));
    bot.onText(/\/h/, handleHelp(bot));
    bot.onText(/\/help/, handleHelp(bot));
};  
