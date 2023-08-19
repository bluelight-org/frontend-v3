import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "./views/HomeView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: false,
      showInMenu: true,
    },
  },
  {
    path: "/about",
    name: "about",
    meta: {
      requiresAuth: false,
      showInMenu: true,
    },
    component: () => import("./views/AboutView.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    meta: {
      requiresAuth: true,
      showInMenu: false,
    },
    component: () => import("./views/SettingsView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: {
      requiresAuth: true,
      showInMenu: true,
    },
    component: () => import("./views/DashboardView.vue"),
  },
  {
    path: "/alert",
    name: "alert",
    meta: {
      requiresAuth: true,
      showInMenu: true,
    },
    component: () => import("./views/AlertView.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      requiresAuth: false,
      showInMenu: false,
    },
    component: () => import("./views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("accessToken")) {
      next();
    } else {
      next({
        params: { nextUrl: to.fullPath },
        name: "login",
      });
    }
  } else {
    next();
  }
});

export default router;
