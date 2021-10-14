import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import QrReader from "vue3-qr-reader";
import axios from 'axios'
import VueAxios from 'vue-axios'
const app = createApp(App);
app.use(router);
app.use(QrReader);
app.use(VueAxios, axios)
app.mount("#app");
