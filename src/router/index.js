import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import('./../views/Dashboard'),
  },
  {
    path: "/expense",
    name: "expense",
    component: () => import('./../views/Expense'),
  },
  {
    path: "/income",
    name: "income",
    component: () => import('./../views/Income'),
  },
  {
    path: "/category",
    name: "category",
    component: () => import('./../views/Category'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
