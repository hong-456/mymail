import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Find from '../views/Find/find.vue'
import Chat from '../views/Chat/chat.vue'
import My from '../views/my/my.vue'

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  },
  {
    path: '/find',
    name: 'find',
    component: Find
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
