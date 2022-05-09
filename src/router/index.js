import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import mobile from './mobile.js'

const routes = [
    {
        path: '/',
        name: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import(`@/views/pc/home.vue`),
        meta: {
            equipment: 'pc',
        },
    },
    {
        path: '/offerwall',
        name: 'offerwall',
        component: () => import(`@/views/pc/offerwall/offerwall.vue`),
        meta: {
            equipment: 'pc',
        },
    },
    {
        path: '/games',
        name: 'games',
        component: () => import(`@/views/pc/games/games.vue`),
        meta: {
            equipment: 'pc',
        },
    },
    {
        path: '/news',
        name: 'news',
        component: () => import(`@/views/pc/news/news.vue`),
        meta: {
            equipment: 'pc',
        },
    },
    {
        path: '/games-detail',
        name: 'gamedetail',
        component: () => import(`@/views/pc/games/gamedetail.vue`),
        meta: {
            equipment: 'pc',
        },
    },
    {
        path: '/games-detailtwo',
        name: 'gamedetailtwo',
        component: () => import(`@/views/pc/games/gamedetailtwo.vue`),
        meta: {
            equipment: 'pc',
        },
    },
    {
        path: '/markeet-place',
        name: 'markeet-place',
        component: () => import(`@/views/pc/markeetplace/markeetplace.vue`),
        meta: {
            equipment: 'pc',
        },
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(`@/views/pc/about/about.vue`),
        meta: {
            equipment: 'pc',
        },
    },
    ...mobile,
]

const router = new VueRouter({
    mode: 'hash',
    routes,
})
router.beforeEach((to, from, next) => {
    console.log(to)
    const ua = window.navigator.userAgent
    let toEquipment = 'pc'
    if (ua.indexOf('iPhone') >= 0 || ua.indexOf('Android') >= 0 || ua.indexOf('iPad') >= 0) {
        toEquipment = 'mobile'
    } else {
        toEquipment = 'pc'
    }
    if (toEquipment === 'mobile' && to.meta.equipment === 'pc' && from) {
        next(`${to.path}-m`)
        setTimeout('console.clear()', 1)
    }
    if (toEquipment === 'pc' && to.meta.equipment === 'mobile') {
        next(to.path.slice(0, -2))
        setTimeout('console.clear()', 1)
    }
    next()
    return false
})

export default router
