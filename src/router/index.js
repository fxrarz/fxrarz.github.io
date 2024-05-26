import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProfileView
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/publications',
      name: 'publications',
      component: () => import('../views/PublicationsView.vue')
    },
    {
      path: '/robots',
      name: 'robots',
      component: () => import('../views/RobotsView.vue')
    },
  ]
})

export default router
