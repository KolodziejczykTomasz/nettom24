import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routerHistory = createWebHistory();

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/not-found",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
