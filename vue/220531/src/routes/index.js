// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'
import NotFound from './NotFound.vue'
// export default VueRouter.createRouter({
export default createRouter({
  //hashmode historymode
  history: createWebHistory(),
  routes: [
    {
      // path: '도메인이 생략되어 있음/',
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    //순서 중요!!! 맨 위에 있으면 안돼! 제일 뒤!
    {
      path: '/:heropy(.*)*',
      component: NotFound,
    },
  ],
})

//vue router 플러그인? 플러그인이란??
