import { Config } from "protractor";
export let config: Config = {
  capabilities: {
    browserName: "chrome"
  },
  directConnect: true,
  framework: "jasmine",
  jasmineNodeOpts: {
    isVerbose: true,
    realtimeFailure: true
  },
  specs: ["spec/*.spec.js"]
};
