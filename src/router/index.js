import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'sign-up',
        component: () =>
            import ('../components/sign-up.vue')
    },
    {
        path: '/',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../components/login.vue')
    },


    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () =>
            import ('../components/forgotpass.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router