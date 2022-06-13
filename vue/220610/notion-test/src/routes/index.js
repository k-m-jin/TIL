import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Workspace from './Workspace.vue'

export default createRouter({
  history: createWebHistory(),
  //전페이지의 스크롤 위치 연동 막기
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/workspaces/:id',
      component: Workspace,
    },
  ],
})
