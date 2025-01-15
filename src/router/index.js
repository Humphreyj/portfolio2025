import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ProfilesView from '@/views/ProfilesView.vue'

const routes = [
    {
        path: '/',
        component: HomeView,
        name: 'Home',
        meta: {
            transition: 'fade',
            order: 0,
            viewLoaded: false,
        },
    },
    {
        path: '/projects',
        component: ProjectsView,
        name: 'projects',
        meta: {
            transition: 'fade',
            order: 1,
            viewLoaded: false,
        },
    },
    {
        path: '/orders',
        component: () => import('@/views/OrdersView.vue'),
        name: 'Orders',
        children: [
            {
                path: '',
                name: 'Manage Orders',
                component: () => import('@/demo/orders/OrdersList.vue'),
            },
            {
                path: 'details/:id',
                name: 'Order Details',
                component: () => import('@/demo/orders/OrderDetails.vue'),
            },
        ],
    },
    {
        path: '/profiles',
        component: ProfilesView,
        name: 'Profiles',
        children: [
            {
                path: '',
                name: 'Manage Profiles',
                component: () => import('@/components/profile/ProfileList.vue'),
            },
            {
                path: 'new',
                name: 'New Profile',
                component: () => import('@/components/profile/NewUser.vue'),
            },
            {
                path: 'details/:id',
                name: 'Profile Details',
                component: () =>
                    import('@/components/profile/ProfileDetails.vue'),
            },
        ],
        meta: {
            transition: 'fade',
            order: 3,
            viewLoaded: false,
        },
    },
]

const router = createRouter({
    linkActiveClass:
        'font-bold  bg-primary-400 rounded-lg text-white dark:bg-secondary-400 shadow-md',
    history: createWebHistory(),
    routes,
})

router.afterEach((to, from) => {
    if (!from.name) {
        // If there is no name, the page has loaded for the first time.
        // return nothing so default transition plays.
        to.meta.viewLoaded = true
        return
    }
    from.meta.viewLoaded = false

    let transition
    if (to.meta.order > from.meta.order) {
        transition = 'slide-left'
    } else {
        transition = 'slide-right'
    }
    to.meta.viewLoaded = true
    to.meta.transition = transition
})

export default router
