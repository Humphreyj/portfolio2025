<script setup>
// Components

const props = defineProps({
    experience: {
        type: Object,
        required: true,
        default: () => ({
            title: 'Software Engineer',
            location: 'Austin, Tx',
            year: '2023 - Present',
        }),
    },
})
// const emit = defineEmits()
</script>

<template>
    <div class="w-full px-2 py-3 my-1 border rounded-md">
        <div class="w-full flex-ic-jb">
            <h3 class="text-lg font-bold">
                {{ experience.company }} - {{ experience.title }}
            </h3>
            <p class="text-sm text-gray-600">
                {{ experience.year }}, {{ experience.location }}
            </p>
        </div>
        <ul class="text-sm list-disc list-inside">
            <li v-for="(bullet, i) in experience.bullets" :key="i">
                {{ bullet }}
            </li>
        </ul>
    </div>
</template>
