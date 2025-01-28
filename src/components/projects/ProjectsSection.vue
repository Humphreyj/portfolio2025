<script setup>
// Components
import ProjectCard from '@/components/projects/ProjectCard.vue'
// Assets
import startupTemplate from '@/assets/startupTemplate.png'
import ezPdf from '@/assets/ezPdf.png'
import quotingSystem from '@/assets/quotingSystem.png'
// const props = defineProps({})
// const emit = defineEmits()
const projects = [
    {
        id: 0,
        projectImg: startupTemplate,
        title: 'Vue UI template',
        type: 'frontend',
        projectUrl: 'https://venerable-caramel-13eb07.netlify.app/',
        description:
            'Frontend template with custom components and composables to speed up new project development.',
        techStack: 'Tailwind CSS, Vue 3, Vite',
    },
    {
        id: 1,
        projectImg: ezPdf,
        title: 'Ezpdf.app',
        type: 'frontend',
        projectUrl: 'https://venerable-caramel-13eb07.netlify.app/',
        description:
            'Invoice Generator for freelancers and small businesses to create and send invoices in seconds.',
        techStack: 'Tailwind CSS, Vue 3, Vite',
    },
    {
        id: 2,
        projectImg: quotingSystem,
        title: "Friend's Cove Quoting System",
        type: 'frontend',
        description:
            'Next.JS web app that uses email authentication and a Rating Engine written in FastAPI.',
        techStack: 'NextJs, Typescript, Prisma',
    },
]

let backendProjects = [
    {
        id: 3,
        title: 'Ezpdf API',
        projectUrl: 'https://github.com/Humphreyj/Node-Api-Template',
        description:
            'API for Ezpdf. Handles authentication, creation and sending of invoices.',
        techStack: 'Node Js, Express, MySql',
    },
    {
        id: 4,
        title: "Friend's Cove Rating Engine",
        description:
            "FastAPI application that calculates the premium for a homeowner's insurance quote from data entered in the Quoting System.",
        techStack: 'Python, Fast API, Docker',
    },

    {
        id: 5,
        title: 'RXP Integrated discount API',
        description:
            'Business-critical system exchanging financial and healthcare transactions with strict latency requirements for the largest pharmacy in the world by revenue.',
        techStack: 'AWS, Python, Fast API, Docker',
    },
]
</script>

<template>
    <section
        class="w-full px-2 pt-1 mx-auto overflow-y-scroll overscroll-contain lg:px-4 md:w-11/12 2xl:w-3/4 md:overflow-y-auto flex-col-ic-js"
    >
        <div class="flex-col-ic-js">
            <h1 class="text-2xl font-bold font-display">Projects</h1>
            <p class="w-3/4 text-center font-content">
                Here are some of the projects I have worked on recently. Some of
                these I can't show, but I am happy to discuss further.
            </p>
        </div>
        <h2 class="my-3 text-xl font-bold border-b border-slate-700">UI</h2>
        <div
            class="grid w-full grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
            <ProjectCard
                v-for="project in projects"
                :key="project.id"
                :projectImg="project.projectImg"
                :title="project.title"
                :type="project.type"
                :projectUrl="project.projectUrl"
                :description="project.description"
                :techStack="project.techStack"
            />
        </div>
        <h2 class="my-3 text-xl font-bold border-b border-slate-700">API</h2>
        <div
            class="grid w-full grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
            <ProjectCard
                v-for="project in backendProjects"
                :key="project.id"
                :projectImg="project.projectImg"
                :title="project.title"
                :type="project.type"
                :projectUrl="project.projectUrl"
                :description="project.description"
                :techStack="project.techStack"
            />
        </div>
    </section>
</template>
