import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CalculatorView from "../views/CalculatorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "IP Address Tracker",
      },
    },
    {
      path: "/calculator",
      name: "calculator",
      component: CalculatorView,
      meta: {
        title: "Calculator",
      },
    },
    {
      path: "/grid",
      name: "gridlayout",
      component: () => import("@/views/GridView.vue"),
      meta: {
        title: "Grid",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/PageNotFound.vue"),
      meta: {
        title: "Not Found",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
