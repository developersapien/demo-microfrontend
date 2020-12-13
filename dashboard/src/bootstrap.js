import { createApp } from "vue";
import Dashboard from "../components/Dashboard.vue";

const mountModule = (htmlElement) => {
  const app = createApp(Dashboard);
  app.mount(htmlElement);
};

if (process.env.NODE_ENV === "development") {
  const moduleRoot = document.querySelector("#_dashboard-dev");
  if (moduleRoot) {
    /* runing application in isolation */
    mountModule(moduleRoot);
  }
}

export { mountModule };
