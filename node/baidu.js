const puppeteer = require('puppeteer');

(async () => {
   // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({ executablePath: 'chromium-browser' });
    const page = await browser.newPage();
    await page.goto('https://baidu.com');
    //await page.screenshot({ path: 'example.png' });
    // await page.plainText();
    let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    console.log(bodyHTML);
    await browser.close();
})();