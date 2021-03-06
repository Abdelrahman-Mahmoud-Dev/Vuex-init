import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import router from "./router/index.js";
import store from "./store/index.js";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
