import Raven from "raven-js";

function init() {
  Raven.config("https://98d6b1ffb02b4d8ca8d7161615835ebc@sentry.io/1404339", {
    release: "1-0-0",
    environment: "development-test"
  }).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log
};
