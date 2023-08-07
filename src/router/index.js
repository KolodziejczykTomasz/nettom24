import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import PageNotFound from "../pages/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

routes: [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:patchMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  }, 
]

});
export default router;