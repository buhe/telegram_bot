import { Controller, Get } from "@tsed/common";
import {exec} from "shelljs";

@Controller("/cpu")
export class CpuController {
    @Get("/")
    get() {
        const temp: string = exec("/opt/vc/bin/vcgencmd measure_temp");
        return {temp, s: temp};
    }
}
