import { Config } from "protractor";

const directConnect = true;
const specs = ["spec/*.spec.js"];

const headed = {
  capabilities: {
    browserName: "chrome"
  },
  directConnect,
  specs
};

const headless = {
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--no-sandbox", "--disable-gpu"]
    }
  },
  directConnect,
  specs
};

const config: Config = process.env.GITHUB_ACTIONS ? headless : headed;

export { config };
