import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"

const routes: RouteRecordRaw[] = [
  //路由配置对象
  {
    path: "/",
    component: () => import("../views/Home/index.vue"),
  },
  {
    path: "/about",
    component: () => import("../views/About/index.vue"),
  },
]
const router = createRouter({
  //路由实例对象
  routes,
  history: createWebHistory(),
})
export default router
