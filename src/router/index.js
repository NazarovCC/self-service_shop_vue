import { createRouter, createWebHistory } from "vue-router";
import AdminStart from "../views/AdminStart";

const routes = [
  { path: "/", name: "Admin", component: AdminStart },

  {
    path: "/session/:id",
    name: "Session",

    component: () => import("../views/OneTracks.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
