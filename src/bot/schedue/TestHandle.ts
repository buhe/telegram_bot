import TelegramBot from "node-telegram-bot-api";
const HomeAssistant = require('homeassistant');
export const handleTest = (bot: TelegramBot,id: string) => {

    
    const hass = new HomeAssistant({
        host: 'http://192.168.31.16',

        // Your Home Assistant port number
        // Optional, defaults to 8123
        port: 8123,

        // Your long lived access token generated on your profile page.
        // Optional
        token: ha,
    });
    bot.sendMessage(id, hass.status());
}

const ha = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwN2VhOWEyY2IxYWI0ZGNhOWQ1NmY3NDY2NWI0NjBkMyIsImlhdCI6MTY0Mzk1NDQ0MSwiZXhwIjoxOTU5MzE0NDQxfQ.mg1b0YGMatEs2nHoCoclhwNa4zsMJUySr_dM4onTqtQ";