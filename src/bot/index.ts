import TelegramBot from "node-telegram-bot-api";
const token = '1564411909:AAFQNbZAskm-aH_-hsjmHjJL8E1Vlr75j74';
const bot: TelegramBot = new TelegramBot(token, { polling: true });
import schedule from "node-schedule";
import { handleCpu } from "./CpuHandle";
import { handleGithub } from "./GithubHandle";
import { handleHackews } from "./HackNewsHandle";
import { handleHelp } from "./HelpHandle";
import { handlePornhub } from "./PornhubHandle";
import { handleSexImg } from "./SexImgHandle";
import { handleWeibo } from "./WeiboHandle";

import { handleTest } from "./schedue/TestHandle";
export async function botStart()  {
    bot.onText(/cpu/, handleCpu(bot));
    bot.onText(/sex/, handleSexImg(bot));
    bot.onText(/h/, handleHelp(bot));
    bot.onText(/help/, handleHelp(bot));
    bot.onText(/github/, handleGithub(bot));
    bot.onText(/weibo/, handleWeibo(bot));
    bot.onText(/news/, handleHackews(bot));
    bot.onText(/porn/, handlePornhub(bot));

    const job = schedule.scheduleJob("*/5 * * * *", function () {
        handleTest(bot, "1470773716");
    });

    process.on('SIGINT', function () {
        job.cancel();
    });
};  
