// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './Home.vue'
import Movie from './Movie.vue'
import About from './About.vue'
import AboutName from './AboutName.vue'
import NotFound from './NotFound.vue'

export default createRouter({
  //hashmode historymode
  history: createWebHistory(),
  routes: [
    {
      name: 'mainpage',
      // path: '도메인이 생략되어 있음/',
      path: '/',
      component: Home,
    },
    {
      path: '/movies/:heropy',
      component: Movie,
    },
    {
      path: '/about',
      component: About,
      children: [
        {
          path: 'name',
          component: AboutName,
        },
      ],
    },
    //순서 중요!!! 맨 위에 있으면 안돼! 제일 뒤!
    {
      path: '/:notFound(.*)*',
      component: NotFound,
    },
  ],
})

//vue router 플러그인? 플러그인이란??
