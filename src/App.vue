<script setup>
import { RouterView } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import { useRoute } from 'vue-router'
// Components
import AboutSection from '@/components/about/AboutSection.vue'
import SkillsSection from '@/components/skills/SkillsSection.vue'
import DarkModeSwitch from './components/UI/DarkModeSwitch.vue'

// Pinia

// Utils

const isDark = useDark()
const toggleDark = useToggle(isDark)
const route = useRoute()
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <main
        class="w-screen h-screen pb-12 overflow-hidden md:pb-0 flex-is-js primary-text dark:bg-cardBackgroundDark"
    >
        <section
            v-if="route.name !== 'Resume'"
            class="relative w-[45%] h-full py-1 motion-translate-y-in-50 motion-duration-[1s] border-r border-slate-400 xl:w-[30%] 2xl:w-1/4 flex-col-ic-js"
        >
            <AboutSection />
            <DarkModeSwitch :is-dark="isDark" @toggle="toggleDark" />
            <nav class="gap-4 mt-4 flex-col-ic-jc">
                <!-- <RouterLink to="/" class="">Projects</RouterLink> -->
                <!-- <RouterLink to="/experience" class="">Experience</RouterLink> -->
                <!-- <RouterLink to="/about" class="">About</RouterLink> -->
            </nav>
            <SkillsSection />
        </section>
        <section
            class="w-full h-full py-4 flex-col-is-js motion-opacity-in-0 transition-all bg-appBackground dark:bg-appBackgroundDark motion-duration-[4s]"
        >
            <RouterView />
        </section>
    </main>
</template>

<style>
/* width */
::-webkit-scrollbar {
    width: 1px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #555;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
