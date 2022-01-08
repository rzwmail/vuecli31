import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/views/home/Home.vue'
// const Home = ()=> import ('@/views/home/Home.vue')

const routes = [
    {
        path: '/home',
        component: Home
    }
]
export default new Router({
    routes,
    mode: 'history'
})

