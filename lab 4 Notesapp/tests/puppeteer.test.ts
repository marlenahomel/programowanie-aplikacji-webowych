import * as puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 40 })
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 })
  await page.goto('http://localhost:8083/');
  await page.screenshot({path: 'screen.png'});
  await page.waitForSelector('#blue')
  await page.type('#title', 'Puppeteer');
  await page.type('#body', 'is working');
  await page.keyboard.press('Enter');
  await page.screenshot({path: 'screen-after-wait.png'});
})();