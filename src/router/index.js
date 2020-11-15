import { createRouter, createWebHistory } from "vue-router";
import EvaluateFashion from "../views/EvaluateFashion.vue";
import DashBoard from "../views/DashBoard.vue";

const routes = [
  {
    path: "/",
    name: "EvaluateFashion",
    component: EvaluateFashion
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashBoard
  },
  {
    path: '/evaluateresult',
    name: 'EvaluateResultFashion',
    component: () => import("../views/EvaluateResultFashion.vue"),
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
