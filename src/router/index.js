import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/views/home/Home.vue')
    },
    {
        path: '/category',
        component: () => import('@/views/category/Category.vue')
    },
]
export default new Router({
    routes,
    mode: 'history'
})

