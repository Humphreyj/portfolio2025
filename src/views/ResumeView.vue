<script setup>
// Components
import GithubIcon from '@/assets/GithubIcon.vue'
import LinkedinIcon from '@/assets/LinkedinIcon.vue'
import ExperienceSection from '@/components/resume/ExperienceSection.vue'
import ResumeProjectSection from '@/components/resume/ResumeProjectSection.vue'
import EducationSection from '@/components/resume/EducationSection.vue'
import StyledHeader from '@/components/UI/StyledHeader.vue'
// const props = defineProps({})
// const emit = defineEmits()
const frontendSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue',
    'Tailwind',
    'Redux',
    'Pinia',
]
const backendSkills = ['Node.js', 'Express', 'Python', 'Postgres', 'SQL']
const testingSkills = ['Cypress', 'Vitest', 'Jest']
</script>

<template>
    <body class="w-[816px] h-[1056px] flex-is-js">
        <section
            id="contact"
            class="relative w-[39%] h-full pl-2 pr-3 border-r border-gray-600 flex-col-is-js"
        >
            <div id="info" class="w-full flex-col-is-js">
                <h1 class="text-[1.6rem] font-bold">Joshua Humphrey</h1>
                <address class="gap-2 not-italic flex-col-is-js pl-[2px]">
                    <a href="mailto:joshhumphrey1@gmail.com"
                        >joshhumphrey1@gmail.com</a
                    >
                    <p>Austin, Tx</p>
                    <a href="tel:832-283-5446">832-283-5446</a>
                    <div class="gap-4 flex-ic-js">
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
                    </div>
                </address>
                <p class="w-11/12 mt-4">
                    Passionate about writing clean, scalable code and solving
                    complex problems.
                </p>
            </div>

            <div class="absolute gap-6 bottom-1 flex-col-is-js">
                <StyledHeader title=">> Skills" />
                <div class="flex-col-is-js">
                    <h4>Frontend</h4>
                    <div class="grid grid-cols-2 gap-2">
                        <p
                            v-for="(skill, i) in frontendSkills"
                            :key="i"
                            class="w-24 gap-2 p-1 text-sm font-semibold text-center border border-black rounded-md flex-col-is-js font-subtext"
                        >
                            {{ skill }}
                        </p>
                    </div>
                </div>
                <div class="flex-col-is-js">
                    <h4>Backend</h4>
                    <div class="grid grid-cols-2 gap-2">
                        <p
                            v-for="(skill, i) in backendSkills"
                            :key="i"
                            class="w-24 gap-2 p-1 text-sm font-semibold text-center border border-black rounded-md flex-col-is-js font-subtext"
                        >
                            {{ skill }}
                        </p>
                    </div>
                </div>
                <div class="flex-col-is-js">
                    <h4>Tools and Testing</h4>
                    <div class="grid grid-cols-2 gap-2">
                        <p
                            v-for="(skill, i) in testingSkills"
                            :key="i"
                            class="w-24 gap-2 p-1 text-sm font-semibold text-center border border-black rounded-md flex-col-is-js font-subtext"
                        >
                            {{ skill }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <main class="w-full h-full px-2 tracking-wide flex-col-is-js">
            <ExperienceSection />
            <ResumeProjectSection />
            <EducationSection />
        </main>
    </body>
</template>
