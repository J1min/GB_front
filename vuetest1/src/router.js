import { createWebHistory, createRouter } from "vue-router";
import QR from "./components/QR.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: QR,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
