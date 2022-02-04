import { up } from "../dropbox/sdk";
import { saveImg, saveSampleImg } from "../javbus/sdk";
function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
(async () => {
    const fileNames: any[] = await saveImg();
    for(var i:number = 0;i<fileNames.length; i++){
        console.log('sleep ' + (10));
        await sleep(10000);
        const samples: any[] = await saveSampleImg(fileNames[i]);
    }
})();