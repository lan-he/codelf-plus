const routes = [
    {
        path: '/home-m',
        name: 'home-m',
        component: () => import(`@/views/mobile/home.vue`),
        meta: {
            equipment: 'mobile',
        },
    },
    {
        path: '/games-m',
        name: 'games-m',
        component: () => import(`@/views/mobile/games/games.vue`),
        meta: {
            equipment: 'mobile',
        },
    },
    {
        path: '/markeet-place-m',
        name: 'markeet-place-m',
        component: () => import(`@/views/mobile/markeet-place/markeet-place.vue`),
        meta: {
            equipment: 'mobile',
        },
    },
    {
        path: '/news-m',
        name: 'news-m',
        component: () => import(`@/views/mobile/news/news.vue`),
        meta: {
            equipment: 'mobile',
        },
    },
    {
        path: '/offerwall-m',
        name: 'offerwall-m',
        component: () => import(`@/views/mobile/offerwall/offerwall.vue`),
        meta: {
            equipment: 'mobile',
        },
    },
]
export default routes
