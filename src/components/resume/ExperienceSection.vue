<script setup>
// Components
import ExperienceCard from '../experience/ExperienceCard.vue'
// Data
import { experienceData } from '@/data/experienceData.js'
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <section class="relative w-full flex-col-is-js">
        <div
            class="relative z-20 w-full py-2 text-3xl text-white rounded-sm bg-cardBackgroundDark"
        >
            <h2 class="ml-2">>> Experience</h2>
        </div>
        <div
            class="absolute left-0 right-0 z-0 w-[95%] h-6 mx-auto translate-y-2 rounded-sm top-6 bg-cardBackgroundDark"
        ></div>
        <div class="w-full pl-1 mt-2">
            <ExperienceCard
                v-for="experience in experienceData"
                :key="experience.id"
                :experience="experience"
            />
        </div>
    </section>
</template>
