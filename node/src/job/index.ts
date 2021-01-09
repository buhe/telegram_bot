import { up } from "../dropbox/sdk";
import { saveImg, saveSampleImg } from "../javbus/sdk";
// for use with Node-style callbacks...
var async = require("async");
function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
(async () => {
    // const samples: any[] = await saveSampleImg({no: 'EMOI-040'});
    // console.log(samples);
    // samples.forEach(e => {
        
    //         up(e.no);
        
    //     });
 
    const fileNames: any[] = await saveImg();
    fileNames.forEach(async e => {
        
        const samples: any[] = await saveSampleImg(e);
        // samples.forEach(async e => {
            // await up(e.no);
        // })
    });
})();