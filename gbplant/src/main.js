import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import axios from "axios";
import QrReader from "vue3-qr-reader";
const app = createApp(App);

app.use(router);
app.use(QrReader);
app.mount("#app");
axios.defaults.baseURL = "http://localhost:8080";
app.config.globalProperties.axios = axios;
