<script setup>
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
    <main class="w-screen h-screen pb-1 flex-is-js">
        <section
            class="relative w-1/4 h-full px-2 py-1 border-r flex-col-is-js"
        >
            <AboutSection />
            <SkillsSection />
        </section>
        <section class="w-full py-4 flex-col-is-js">
            <nav class="w-full gap-4 flex-ic-jc">
                <div class="border-2 size-32"></div>
                <div class="border-2 size-32"></div>
                <div class="border-2 size-32"></div>
            </nav>
            <div class="w-full gap-4 flex-ic-jc">
                <p class="w-32 text-center">Projects</p>
                <p class="w-32 text-center">Experience</p>
                <p class="w-32 text-center">About</p>
            </div>
            <ProjectsSection />
        </section>
    </main>
</template>
