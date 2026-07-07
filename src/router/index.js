import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/voicegate-demo', component: () => import('../views/VoicegateDemoView.vue') },
    { path: '/privacy', component: () => import('../views/PrivacyView.vue') },
    { path: '/terms', component: () => import('../views/TermsView.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return new Promise(resolve =>
        setTimeout(() => resolve({ el: to.hash, behavior: 'smooth', top: 72 }), 80)
      )
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
