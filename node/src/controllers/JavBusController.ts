import { Controller, Get } from "@tsed/common";

@Controller("/javbus")
export class JavBusController {
    @Get("/")
    get() {
        return "JavBus.com";
    }
}
