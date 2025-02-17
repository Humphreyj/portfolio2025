<script setup>
// Components
import StyledHeader from '@/components/UI/StyledHeader.vue'

// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <section class="relative w-full gap-2 flex-col-is-js">
        <StyledHeader title=">> Projects" size="xl" />
        <div class="w-full flex-col-is-js">
            <div class="w-full px-2 py-3 my-1 border rounded-md">
                <h3 class="text-lg font-bold">Project Title</h3>
                <p class="text-sm text-gray-600">Year - Location</p>
                <ul class="text-sm list-disc list-inside"></ul>
            </div>
        </div>
    </section>
</template>
