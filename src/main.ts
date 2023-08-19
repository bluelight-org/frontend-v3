import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from "./i18n";
import Notifications from "@kyvg/vue3-notification";

createApp(App)
  .use(Notifications)
  .use(store)
  .use(router)
  .use(i18n)
  .mount("#app");
