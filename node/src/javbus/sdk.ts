const puppeteer = require('puppeteer');
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

export async function saveImg(): Promise<any[]> {
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({ executablePath: 'chromium-browser' });
    const page = await browser.newPage();
    await page.goto('https://javbus.com');
    let episodes_details = await page.evaluate(() => {
        let table = document.querySelectorAll(".item");
        let episode_panels: any[] = Array.from((table as any));

        let episodes_info = episode_panels.map(episode_panel => {
            let title = episode_panel.querySelector("span").textContent;
            let no = episode_panel.querySelector("date").textContent;
            let src = episode_panel.querySelector("img").getAttribute('src');
            return { title, src, no };
        });
        return episodes_info;
    });
    await episodes_details.forEach(async(element: any) => {

        // console.log(element.no);
        const res: any = await fetch(element.src);
        await new Promise((resolve, reject) => {
            const fileStream = fs.createWriteStream(path.resolve("/tmp", element.no + '.jpg'));
            res.body.pipe(fileStream);
            res.body.on("error", (err: any) => {
                reject(err);
            });
            fileStream.on("finish", function () {
                resolve(null);
            });
        });
    });

    await browser.close();
    return episodes_details;
}
// 
export async function saveSampleImg(info: any): Promise<any[]>{
    const browser = await puppeteer.launch({ executablePath: 'chromium-browser' });
    const page = await browser.newPage();
    await page.goto('https://javbus.com/' + info.no, { waitUntil: 'load', timeout: 0});
    console.log('sub page is ' + 'https://javbus.com/' + info.no)
    // const className = 'photo-frame';
    // let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    // console.log(bodyHTML);
     let episodes_details = await page.evaluate(() => {
         let table = document.querySelectorAll(".sample-box");
         function makeid(length: number) {
             var result = '';
             var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
             var charactersLength = characters.length;
             for (var i = 0; i < length; i++) {
                 result += characters.charAt(Math.floor(Math.random() * charactersLength));
             }
             return result;
         }
         let noPrefix: string | null = makeid(5);
         let star = document.querySelector(".star-name > a");
         if(star){
             noPrefix = star.textContent;
         }else{

         }
        let episode_panels: any[] = Array.from((table as any));

        let episodes_info = episode_panels.map(episode_panel => {
            // let title = episode_panel.querySelector("span").textContent;
            // let no = episode_panel.querySelector("date").textContent;
           
           
            // if(title !== null){
                
                let src = episode_panel.getAttribute('href');
                let title = src;
                let no = noPrefix + src.substring(src.length - 6, src.length - 3);
                return { title, src, no };
            // }else{
            //     return null;
            // }
            
        });
        return episodes_info;
    });
    await episodes_details.forEach(async (element: any) => {

        console.log(element.no);
        const res: any = await fetch(element.src);
        await new Promise((resolve, reject) => {
            const fileStream = fs.createWriteStream(path.resolve("/tmp", element.no + '.jpg'));
            res.body.pipe(fileStream);
            res.body.on("error", (err: any) => {
                reject(err);
            });
            fileStream.on("finish", function () {
                resolve(null);
            });
        });
    });

    await browser.close();
    return episodes_details;

    // return null as any;
}