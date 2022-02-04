import TelegramBot from "node-telegram-bot-api";
export const handleTest = (bot: TelegramBot,id: string) => {
    bot.sendMessage(id, "test");
}