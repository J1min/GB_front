import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import QrReader from "vue3-qr-reader";

const app = createApp(App);

app.use(router);
app.mount("#app");
app.use(QrReader);

