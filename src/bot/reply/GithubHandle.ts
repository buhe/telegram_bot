import TelegramBot from "node-telegram-bot-api";
import { Octokit } from "@octokit/rest";
const octokit = new Octokit({ auth: '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'});
export const handleGithub = (bot: TelegramBot) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    return async (msg: any) => {
        const chatId = msg.chat.id;
        const users = await
            octokit.users.listFollowingForUser({ username: 'buhe', per_page: 10});
        // console.log(JSON.stringify(orgs));
        
        users.data.forEach(async (u) => {
            // console.log(u!.login)
            let names = '';
            const orgs = await octokit.activity.listReposStarredByUser({
                username: u!.login,
                per_page: 1
            });

            // orgs.data.forEach(o => {
            //     if (o.html_url) {
            //         names = names + o.html_url;
            //     }
            // });
            bot.sendMessage(chatId, names);
            // console.log(names);
        })
        
        // send back the matched "whatever" to the chat
    }

}