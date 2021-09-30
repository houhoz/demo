import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  // {
  //   path: "/404",
  //   name: "NotFound",
  //   component: () => import("@/views/NotFound.vue"),
  // },
  {
    path: "/",
    name: "Index",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Index.vue"),
  },
  {
    // 路由配置'*'报错问题，替换成'/:catchAll(.*)'
    // caught Error: Catch all routes ("*") must now be defined using a param with a custom regexp
    path: "/:catchAll(.*)", // 此处需特别注意置于最底部
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes,
});

export default router;
