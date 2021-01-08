import { uptime } from "process";
import { up } from "../dropbox/sdk";
import { saveImg } from "../javbus/sdk";

(async () => {
    const fileNames: any[] = await saveImg();
    fileNames.forEach(e => {
        up(e.no);
    });
})();