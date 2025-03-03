<script setup>
// Components
const props = defineProps({
    project: {
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
            <h3 class="text-lg font-bold">{{ project.title }}</h3>
            <p class="text-sm text-gray-600">{{ project.company }}</p>
        </div>
        <p class="text-sm">{{ project.description }}</p>
        <p class="text-sm font-bold">{{ project.techStack }}</p>
    </div>
</template>
