<script setup>
// Components
import Card from '@/components/UI/Card.vue'
const props = defineProps({
    projectImg: String,
    title: String,
    projectUrl: String,
    description: String,
    techStack: String,
})
// const emit = defineEmits()
</script>

<template>
    <Card container-class="w-[30%] gap-1 p-2 flex-col-ic-jc">
        <img :src="projectImg" class="w-64 border h-44"></img>
        <a :href="projectUrl" target="_blank"  class="font-semibold">{{ title }}</a>
        <p class="text-center">{{ description }}</p>
        <p>{{ techStack }}</p>
    </Card>
</template>
