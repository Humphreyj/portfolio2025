<script setup>
import { RouterView, RouterLink } from 'vue-router'
// Components
import AboutSection from '@/components/about/AboutSection.vue'
import SkillsSection from '@/components/skills/SkillsSection.vue'
import ProjectsSection from '@/components/projects/ProjectsSection.vue'
// Pinia

// Utils
// const props = defineProps({})
// const emit = defineEmits()

// brown bg
// bg-[#533420]
</script>

<template>
    <main class="w-screen h-screen pb-1 overflow-hidden flex-is-js">
        <section
            class="relative w-[40%] h-full py-1 border-r xl:w-[30%] flex-col-ic-js"
        >
            <AboutSection />
            <div class="gap-4 mt-4 flex-col-ic-jc">
                <RouterLink to="/" class="">Projects</RouterLink>
                <RouterLink to="/experience" class="">Experience</RouterLink>
                <RouterLink to="/about" class="">About</RouterLink>
            </div>
            <SkillsSection />
        </section>
        <section class="w-full h-full py-4 flex-col-is-js bg-slate-50">
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
