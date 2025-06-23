import Vue from 'vue'
import VueRouter from 'vue-router'
import { menuRouter } from './menu/menu'
import viewIndex from '../views'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/ranking'
    },
    {
        name: 'menu',
        path: '/ranking',
        redirect: '/ranking',
        component: viewIndex,
        children: [...menuRouter]
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    next()
})
export default router
