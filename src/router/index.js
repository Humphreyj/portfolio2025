import { createWebHistory, createRouter } from 'vue-router'

import ProjectsSection from '@/components/projects/ProjectsSection.vue'

import ResumeView from '@/views/ResumeView.vue'

const routes = [
    {
        path: '/',
        component: ProjectsSection,
        name: 'Projects',
        meta: {
            transition: 'fade',
            order: 0,
            viewLoaded: false,
        },
    },
    {
        path: '/resume',
        component: ResumeView,
        name: 'Resume',
        meta: {
            transition: 'fade',
            order: 0,
            viewLoaded: false,
        },
    },
]

const router = createRouter({
    linkActiveClass: 'font-bold rounded-lg dark:bg-secondary-400 ',
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
