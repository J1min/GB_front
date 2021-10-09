import { createWebHistory, createRouter } from "vue-router";
// import Vue from "vue";
// import Router from "vue-router";
import Main from "./components/Main";
import Start from "./components/1Start";
import Choose from "./components/2ChoosePlant";
// 필수

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
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
];

// 이렇게 해도 된다.
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
// export default router;

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
