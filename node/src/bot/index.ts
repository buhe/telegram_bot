import TelegramBot from "node-telegram-bot-api";
const token = '1564411909:AAFQNbZAskm-aH_-hsjmHjJL8E1Vlr75j74';
const bot: TelegramBot = new TelegramBot(token, { polling: true });
import { exec } from "shelljs";
import { handleCpu } from "./CpuHandle";
export async function botStart()  {
    // Matches "/echo [whatever]"
    bot.onText(/\/cpu/, handleCpu(bot));
};  
