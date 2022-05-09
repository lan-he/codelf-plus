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
]
export default routes
