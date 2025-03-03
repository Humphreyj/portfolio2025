<script setup>
// Components
const props = defineProps({
    education: {
        type: Object,
        required: true,
        default: () => ({
            title: 'Project Title',
            location: 'Location',
            year: 'Year',
            description: 'Description',
            techStack: 'Tech Stack',
        }),
    },
})
// const emit = defineEmits()
</script>

<template>
    <div class="w-full px-2 py-3 my-1 border rounded-md">
        <div class="w-full flex-ic-jb">
            <h3 class="text-lg font-bold">{{ education.title }}</h3>
            <p class="text-sm text-gray-600">
                {{ education.year }}, {{ education.location }}
            </p>
        </div>
        <p class="text-sm">{{ education.field }}</p>
    </div>
</template>
