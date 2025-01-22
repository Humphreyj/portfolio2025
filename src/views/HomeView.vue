<script setup>
import { RouterView } from 'vue-router'
// Components
import { RouterLink } from 'vue-router'
import AboutSection from '@/components/about/AboutSection.vue'
import SkillsSection from '@/components/skills/SkillsSection.vue'

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
            <RouterView />
        </section>
    </main>
</template>
