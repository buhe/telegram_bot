const puppeteer = require('puppeteer');
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

(async () => {
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
})();