import TelegramBot from "node-telegram-bot-api";

const PornHub = require('pornhub.js');
const pornhub = new PornHub();
export const handlePornhub = (bot: TelegramBot) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    return async (msg: any) => {
        const chatId = msg.chat.id;
        try {

            const res = await
                pornhub.search('Video', 'bdsm');
            const videos = res.data;
            const index = Math.floor(Math.random() * videos.length);
            const video = videos[index];
            console.log(JSON.stringify(video));
            bot.sendMessage(chatId, video['title'] + ':' + video['url'])
            const result2 = await pornhub.video(video.url);
            const videoDownload = result2.data;
            console.log(JSON.stringify(videoDownload));
            bot.sendVideo(chatId, videoDownload.videos[0].url);
        } catch (e) {
            console.log(e);
        }
        // bot.sendVideo(chatId, temp);
        // send back the matched "whatever" to the chat
    }

}