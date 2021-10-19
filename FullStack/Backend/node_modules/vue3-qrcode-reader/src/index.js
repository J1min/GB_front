import QrcodeStream from "./components/QrcodeStream.vue";
import QrcodeCapture from "./components/QrcodeCapture.vue";
import QrcodeDropZone from "./components/QrcodeDropZone.vue";

// Expose the components
export { QrcodeStream, QrcodeCapture, QrcodeDropZone };

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

const plugin = {
  install(app) {
    app.component("qrcode-stream", QrcodeStream);
    app.component("qrcode-capture", QrcodeCapture);
    app.component("qrcode-drop-zone", QrcodeDropZone);
  }
};

export default plugin;

// Auto-install
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}
