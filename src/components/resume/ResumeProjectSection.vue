<script setup>
// Components
import StyledHeader from '@/components/UI/StyledHeader.vue'
import ResumeProjectCard from './ResumeProjectCard.vue'
// Data
import { projectData } from '@/data/experienceData.js'

// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <section class="relative w-full gap-2 flex-col-is-js">
        <StyledHeader title=">> Projects" size="lg" />
        <div class="w-full flex-col-is-js">
            <ResumeProjectCard
                v-for="project in projectData"
                :key="project.id"
                :project="project"
            />
        </div>
    </section>
</template>
