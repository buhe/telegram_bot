import { up } from "../dropbox/sdk";
import { saveImg, saveSampleImg } from "../javbus/sdk";
function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
(async () => {
    // const samples: any[] = await saveSampleImg({no: 'EMOI-040'});
    // console.log(samples);
    // samples.forEach(e => {
        
    //         up(e.no);
        
    //     });
    let count = 0;
    const fileNames: any[] = await saveImg();
    await sleep(5000);
    fileNames.forEach(async e => {
        count++;
        if(count > 3){
            await sleep(50000);
            count = 0;
        }
        up(e.no);
        const samples: any[] = await saveSampleImg(e);
        await sleep(5000);
        samples.forEach( e => {
            up(e.no);
        })
    });
})();