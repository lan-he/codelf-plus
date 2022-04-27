import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const ua = window.navigator.userAgent
let path = 'web'
if (ua.indexOf('iPhone') >= 0) path = 'phone'
if (ua.indexOf('Android') >= 0) path = 'phone'
if (ua.indexOf('iPad') >= 0) path = 'phone'
const routes = [
    // { path: '/:pathMatch(.*)*', name: 'notfound', component: () => import(`@/views/${path}/home.vue`) },
    {
        path: '/',
        name: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import(`@/views/${path}/home.vue`),
    },
    {
        path: '/offerwall',
        name: 'offerwall',
        component: () => import(`@/views/${path}/offerwall/offerwall.vue`),
    },
    {
        path: '/games',
        name: 'games',
        component: () => import(`@/views/${path}/games/games.vue`),
    },
    {
        path: '/news',
        name: 'news',
        component: () => import(`@/views/${path}/news/news.vue`),
    },
    {
        path: '/games/detail',
        name: 'gamedetail',
        component: () => import(`@/views/${path}/games/gamedetail.vue`),
    },
    {
        path: '/games/detailtwo',
        name: 'gamedetailtwo',
        component: () => import(`@/views/${path}/games/gamedetailtwo.vue`),
    },
    {
        path: '/markeet-place',
        name: 'markeet-place',
        component: () => import(`@/views/${path}/markeetplace/markeetplace.vue`),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(`@/views/${path}/about/about.vue`),
    },
]

const router = new VueRouter({
    mode: 'hash',
    routes,
})

export default router
