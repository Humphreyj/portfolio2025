<script setup>
// Components
import ProjectCard from '@/components/projects/ProjectCard.vue'
// Assets
import startupTemplate from '@/assets/startupTemplate.png'
// const props = defineProps({})
// const emit = defineEmits()
const projects = [
    {
        id: 0,
        projectImg: startupTemplate,
        title: 'Vue UI template',
        projectUrl: 'https://venerable-caramel-13eb07.netlify.app/',
        description:
            'Frontend template to spin up projects faster with custom components and composables',
        techStack: 'Tailwind CSS, Vue 3, Vite',
    },
    {
        id: 1,
        projectImg: startupTemplate,
        title: 'Ezpdf.app',
        projectUrl: 'https://venerable-caramel-13eb07.netlify.app/',
        description:
            'Invoice Generator for freelancers and small businesses to create and send invoices in seconds.',
        techStack: 'Tailwind CSS, Vue 3, Vite',
    },
    {
        id: 2,
        projectImg: startupTemplate,
        title: 'Ezpdf API',
        projectUrl: 'https://venerable-caramel-13eb07.netlify.app/',
        description:
            'API for Ezpdf. Handles authentication, creation and sending of invoices.',
        techStack: 'Node Js, Express, MySql',
    },
    {
        id: 3,
        projectImg: startupTemplate,
        title: "Friend's Cove Quoting System",
        projectUrl: 'https://venerable-caramel-13eb07.netlify.app/',
        description:
            'Next.JS web app that uses email authentication and a Rating Engine written in FastAPI.',
        techStack: 'NextJs, Typescript, Prisma',
    },
    {
        id: 4,
        projectImg: startupTemplate,
        title: "Friend's Cove Rating Engine",
        projectUrl: 'https://venerable-caramel-13eb07.netlify.app/',
        description:
            'FastAPI application that calculates the premium for a given quote using the BriteCore SDK.',
        techStack: 'Python, Fast API, Docker',
    },
    {
        id: 4,
        projectImg: startupTemplate,
        title: 'RxPatrner Integrated discount API',
        projectUrl: 'https://venerable-caramel-13eb07.netlify.app/',
        description:
            'Business-critical system exchanging financial and healthcare transactions with sector partners. ',
        techStack: 'Python, Fast API, Docker',
    },
]
</script>

<template>
    <section class="w-full border flex-col-ic-js">
        Projects
        <div class="flex-wrap w-full gap-2 flex-ic-jc">
            <ProjectCard
                v-for="project in projects"
                :key="project.id"
                :projectImg="project.projectImg"
                :title="project.title"
                :projectUrl="project.projectUrl"
                :description="project.description"
                :techStack="project.techStack"
            />
        </div>
    </section>
</template>
