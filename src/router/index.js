import { createRouter, createWebHistory } from "vue-router";
import AdminStart from '../views/AdminStart'

const routes = [
  { path: "/",
    name: "Admin",
    component: AdminStart},

   { path: "/session/:id",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OneTracks.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
