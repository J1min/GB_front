import { createWebHistory, createRouter } from "vue-router";
// import Vue from "vue";
// import Router from "vue-router";
import Main from "./components/Main";
import Start from "./components/1Start";
import Choose from "./components/2ChoosePlant";
import QR from "./components/QR.vue";
import w404 from "./components/OnError";
import PB1 from "./components/PB1";
import PB2 from "./components/PB2";
import PB3 from "./components/PB3";
import PB4 from "./components/PB4";
import PB5 from "./components/PB5";
import PB6 from "./components/PB6";
import PB7 from "./components/PB7";
import PB8 from "./components/PB8";
import PB9 from "./components/PB9";
import Plant1 from "./components/Plant1";
import Plant2 from "./components/Plant2";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/404",
    name: "404",
    component: w404,
  },
  {
    path: "/start",
    name: "Start",
    component: Start,
  },

  {
    path: "/choose",
    name: "Choose",
    component: Choose,
  },

  {
    path: "/choose/info1",
    name: "info1",
    component: PB1,
  },
  {
    path: "/choose/info2",
    name: "info2",
    component: PB2,
  },
  {
    path: "/choose/info3",
    name: "info3",
    component: PB3,
  },
  {
    path: "/choose/info4",
    name: "info4",
    component: PB4,
  },
  {
    path: "/choose/info5",
    name: "info5",
    component: PB5,
  },
  {
    path: "/choose/info6",
    name: "info6",
    component: PB6,
  },
  {
    path: "/choose/info7",
    name: "info7",
    component: PB7,
  },
  {
    path: "/choose/info8",
    name: "info8",
    component: PB8,
  },
  {
    path: "/choose/info9",
    name: "info9",
    component: PB9,
  },
  {
    path: "/my/plant1",
    name: "plant",
    component: Plant1,
  },
  {
    path: "/my/plant2",
    name: "plant2",
    component: Plant2,
  },
  {
    path: "/scan",
    name: "QRScan",
    component: QR,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
