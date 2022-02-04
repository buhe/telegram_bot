import { Controller, Get } from "@tsed/common";
import * as Bot from "node-telegram-bot-api";
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
@Controller("/bot")
export class TelegramController {
    @Get("/")
    get() {
        return "hello";
    }
}
