import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

import { defineCustomElements } from "carpart-ui-webcomp/dist/loader";

const mountModule = (
  htmlElement,
  { onNavigate, defaultHistory, initialPath }
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, htmlElement);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const moduleRoot = document.querySelector("#_marketing-dev");
  if (moduleRoot) {
    /* runing application in isolation */
    mountModule(moduleRoot, { defaultHistory: createBrowserHistory() });
  }
}
defineCustomElements(window);

export { mountModule };
