<script setup>
// Components
import GithubIcon from '@/assets/GithubIcon.vue'
import LinkedinIcon from '@/assets/LinkedinIcon.vue'
import ExperienceSection from '@/components/resume/ExperienceSection.vue'
import ResumeProjectSection from '@/components/resume/ResumeProjectSection.vue'
import StyledHeader from '@/components/UI/StyledHeader.vue'
// const props = defineProps({})
// const emit = defineEmits()
const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Node.js',
    'Express',
    'React',
    'Vue',
    'Tailwind',
    'Redux',
    'Pinia',
    'Python',
    'Postgres',
    'SQL',
    'TypeScript',
    'Bootstrap',
    'Cypress',
    'Vitest',
    'Jest',
]
</script>

<template>
    <body class="w-full h-screen flex-is-js">
        <section
            id="contact"
            class="relative w-1/3 h-full pl-2 pr-3 border-r border-gray-600 flex-col-is-js"
        >
            <div id="info" class="w-full flex-col-is-js">
                <h1 class="text-xl font-bold">Joshua Humphrey</h1>
                <address class="gap-2 flex-col-is-js">
                    <a href="mailto:joshhumphrey1@gmail.com"
                        >joshhumphrey1@gmail.com</a
                    >
                    <p>Austin, Tx</p>
                    <a href="tel:832-283-5446">832-283-5446</a>
                    <a
                        href="https://github.com/Humphreyj"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><GithubIcon class="size-8"
                    /></a>

                    <a
                        href="https://www.linkedin.com/in/joshahumphrey/"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><LinkedinIcon class="size-8"
                    /></a>
                </address>
                <p class="w-3/4 my-1">
                    Full Stack developer with a passion for designing and
                    developing scalable, dynamic web applications. Striving to
                    learn more everyday.
                </p>
            </div>

            <div class="absolute bottom-0 gap-6 flex-col-is-js">
                <StyledHeader title=">> Skills" />
                <div class="grid grid-cols-2 gap-2">
                    <p
                        v-for="(skill, i) in skills"
                        :key="i"
                        class="w-24 gap-2 p-1 text-sm font-semibold text-center border border-black rounded-md flex-col-is-js font-subtext"
                    >
                        {{ skill }}
                    </p>
                </div>
            </div>
        </section>
        <main class="w-full h-full px-2 flex-col-is-js">
            <ExperienceSection />
            <ResumeProjectSection />
        </main>
    </body>
</template>
