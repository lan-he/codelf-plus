import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const ua = window.navigator.userAgent
let phone = false
if (ua.indexOf('iPhone') >= 0) phone = true
if (ua.indexOf('Android') >= 0) phone = true
if (ua.indexOf('iPad') >= 0) phone = true
let path = phone ? 'phone' : ''
const routes = [
    {
        path: '/',
        name: '/',
        redirect: '/Home',
    },
    {
        path: '/Home',
        name: 'Home',
        component: () => import(`@/views/home/${path}home.vue`),
    },
    {
        path: '/Offerwall',
        name: 'Offerwall',
        component: () => import(`@/views/offerwall/${path}offerwall.vue`),
    },
    {
        path: '/Games',
        name: 'Games',
        component: () => import(`@/views/games/${path}games.vue`),
    },
    {
        path: '/News',
        name: 'News',
        component: () => import(`@/views/news/${path}news.vue`),
    },
    {
        path: '/Games/detail',
        name: 'Gamedetail',
        component: () => import(`@/views/games/${path}gamedetail.vue`),
    },
    {
        path: '/Games/detailtwo',
        name: 'Gamedetailtwo',
        component: () => import(`@/views/games/${path}gamedetailtwo.vue`),
    },
    {
        path: '/MarkeetPlace',
        name: 'markeetplace',
        component: () => import(`@/views/markeetplace/${path}markeetplace.vue`),
    },
    {
        path: '/About',
        name: 'about',
        component: () => import(`@/views/about/${path}about.vue`),
    },
]

const router = new VueRouter({
    mode: 'hash',
    routes,
})

export default router
