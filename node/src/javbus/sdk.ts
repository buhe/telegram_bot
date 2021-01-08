const puppeteer = require('puppeteer');

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
            let src = episode_panel.querySelector("img").getAttribute('src');
            return { title, src };
        });
        return episodes_info;
    });

    await episodes_details.forEach((element: any) => {

        console.log(element.src)
    });

    await browser.close();
})();