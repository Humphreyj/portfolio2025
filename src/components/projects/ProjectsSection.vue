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
            'Frontend template to spin up projects faster with custom components and composables',
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
            "FastAPI application that calculates the premium for a homeowner's insurance quote.",
        techStack: 'Python, Fast API, Docker',
    },
    {
        id: 5,
        title: 'RXP Integrated discount API',
        description:
            'Business-critical system exchanging financial and healthcare transactions with strict latency requirements. ',
        techStack: 'Python, Fast API, Docker',
    },
]
</script>

<template>
    <section
        class="w-full px-2 pt-5 mx-auto overflow-y-scroll lg:px-4 lg:w-11/12 2xl:w-2/3 md:overflow-y-auto flex-col-ic-js"
    >
        <div class="flex-col-ic-js">
            <h1 class="text-2xl font-bold">Projects</h1>
            <p class="text-center">
                Here are some of the projects I have worked on recently.
            </p>
        </div>
        <h2 class="my-1 text-xl font-bold">UI</h2>
        <div
            class="grid w-full grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3"
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
        <h2 class="my-1 text-xl font-bold">API</h2>
        <div
            class="grid w-full grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3"
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
