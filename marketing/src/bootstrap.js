import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mountModule = (htmlElement) => {
  ReactDOM.render(<App />, htmlElement);
};

if (process.env.NODE_ENV === "development") {
  const moduleRoot = document.querySelector("#_marketing-dev");
  if (moduleRoot) {
    mountModule(moduleRoot);
  }
}

export { mountModule };
