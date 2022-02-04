import TelegramBot from "node-telegram-bot-api";
const HomeAssistant = require('homeassistant');
let old = "";
export const handleTest = async (bot: TelegramBot,id: string) => {
    const ha = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwN2VhOWEyY2IxYWI0ZGNhOWQ1NmY3NDY2NWI0NjBkMyIsImlhdCI6MTY0Mzk1NDQ0MSwiZXhwIjoxOTU5MzE0NDQxfQ.mg1b0YGMatEs2nHoCoclhwNa4zsMJUySr_dM4onTqtQ";
    
    const hass = new HomeAssistant({
        host: 'http://192.168.31.16',
        token: ha,
    });
    const status = JSON.stringify(await hass.status());
    // console.log(status);
    if(old != status) {
        bot.sendMessage(id, status);
        old = status;
    }
}

