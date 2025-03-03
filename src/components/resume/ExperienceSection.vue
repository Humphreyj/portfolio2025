<script setup>
// Components
import ExperienceCard from '../experience/ExperienceCard.vue'
import StyledHeader from '@/components/UI/StyledHeader.vue'
// Data
import { experienceData } from '@/data/experienceData.js'
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <section class="relative w-full flex-col-is-js">
        <StyledHeader title=">> Experience" size="lg" />
        <div class="w-full pl-1 mt-2">
            <ExperienceCard
                v-for="experience in experienceData"
                :key="experience.id"
                :experience="experience"
            />
        </div>
    </section>
</template>
