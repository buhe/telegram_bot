import TelegramBot from "node-telegram-bot-api";
import { Dropbox, Error, files } from 'dropbox'; // eslint-disable-line no-unused-vars
import fs = require('fs');
const accessToken: string = 'RS3fSg5C7UkAAAAAAAAAAa-WvJjmJNrpEz_8uF_YwU2wBpTgvoYacEer1nEpcgWu';
const dbx = new Dropbox({ accessToken: accessToken });
export const handleSexImg = (bot: TelegramBot) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    return (msg: any) => {
        const chatId = msg.chat.id;
        dbx.filesListFolder({path: '/img'}).then((list) => {
            const size = list.result.entries.length;
            const index = Math.floor(Math.random() * size);
            const path = list.result.entries[index]['path_display'];
            // console.log(path)
            return path;
        }).then(path => {
            return dbx.filesDownload({'path': path!})
        }).then(data => {
            // console.log(`File: ${JSON.stringify((data.result as any).fileBinary)} saved.`);
            bot.sendPhoto(chatId, (data.result as any).fileBinary);
        });
        // dbx.fileRequestsListV2("/img");
        // bot.sendPhoto(chatId, ,dbx.fileRequestsGet);
        // send back the matched "whatever" to the chat
    }

}