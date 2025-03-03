<script setup>
// Components
import StyledHeader from '@/components/UI/StyledHeader.vue'
import EducationCard from './EducationCard.vue'
// Data
import { educationData } from '@/data/experienceData.js'

// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <section class="relative w-full gap-2 flex-col-is-js">
        <StyledHeader title=">> Education" size="lg" />
        <div class="w-full flex-col-is-js">
            <EducationCard
                v-for="education in educationData"
                :key="education.id"
                :education="education"
            />
        </div>
    </section>
</template>
