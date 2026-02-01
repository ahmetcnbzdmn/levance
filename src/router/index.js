import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/hizmetlerimiz',
        name: 'Services',
        component: Services
    },
    {
        path: '/hakkimizda',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/bize-ulasin',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router
