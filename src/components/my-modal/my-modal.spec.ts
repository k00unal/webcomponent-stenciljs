import { newE2EPage } from "@stencil/core/testing";
const puppeteer = require("puppeteer");
import { MyModal } from "./my-modal";

describe("<my-modal>", () => {
  it("should build", () => {
    expect(new MyModal()).toBeTruthy();
  });
});
describe("rendering", () => {
  it("should have h1 with name", async () => {
    const page = await newE2EPage();
    await page.setContent(`<my-modal></my-modal>`);
    const el = await page.find("my-modal h1");
    expect(el).not.toBeNull();
  });

  // Snapshot testing
  it("should populate the name attribute", async () => {
    const page = await newE2EPage({
      html: `
    <my-modal name="Simple modal"></my-modal>
    `
    });

    const BulletLinkComponent = await page.find("my-modal");
    await page.waitForChanges();
    expect(BulletLinkComponent.innerHTML).toMatchSnapshot();
  });
});

//create global variables to be used in the beforeAll function
let browser;
let page;

beforeAll(async () => {
  // launch browser
  browser = await puppeteer.launch({
    headless: false, // headless mode set to false so browser opens up with visual feedback
    slowMo: 80 // how slow actions should be
  });
  // creates a new page in the opened browser
  page = await browser.newPage();
});

describe("E2E browser modal component check", () => {
  it("Should check for h1 tag content", async () => {
    await page.goto("http://localhost:3333/");
    await page.click("#modal-btn");
    const finalText = await page.$eval("h1", el => el.textContent);
    expect(finalText).toBe("Simple modal");
  }, 10000);
  it("Should check for h1 tag content", async () => {
    await page.goto("http://localhost:3333/");
    await page.click("#modal-btn");
    const finalText = await page.$eval("p", el => el.textContent);
    expect(finalText).toBe("Simple modal");
  }, 10000);
});

// This function occurs after the result of each tests, it closes the browser
afterAll(() => {
  browser.close();
});

// test("Should check for h1 tag inside the modal component", async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 80
//     // args: ["--window-size=1920,1080"]
//   });
//   const page = await browser.newPage();
//   await page.goto("http://localhost:3333/");
//   await page.click("#modal-btn");
//   const finalText = await page.$eval("h1", el => el.textContent);
//   expect(finalText).toBe("Simple modal");
// });
