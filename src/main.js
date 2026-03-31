import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import HomePage from './pages/HomePage.vue'
import ServicesPage from './pages/ServicesPage.vue'
import AProposPage from './pages/AProposPage.vue'
import ContactPage from './pages/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/services', component: ServicesPage },
    { path: '/a-propos', component: AProposPage },
    { path: '/contact', component: ContactPage },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

createApp(App).use(router).mount('#app')
