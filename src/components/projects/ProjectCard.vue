<script setup>
import { computed } from 'vue';
// Components
import Card from '@/components/UI/Card.vue'
const props = defineProps({
    projectImg: String,
    title: String,
    type: String,
    projectUrl: String,
    description: String,
    techStack: String,
})
// const emit = defineEmits()

const gridClass = computed(() => {
    if (props.type === 'frontend') {
        return 'grid-rows-[auto_auto_1fr_auto]'
    } else {
        return 'grid-rows-[auto_auto_1fr]'
    }
})

const titleClass = ""
</script>

<template>
    <main class="w-full">
        <Card v-if="type==='frontend'" container-class="grid justify-center w-full grid-cols-1 gap-1 p-2 text-center box-shadow-sm" :class="gridClass">
            <img v-if="type==='frontend'" :src="projectImg" class="w-64 mx-auto border h-44"></img>
            <a v-if="projectUrl" :href="projectUrl" target="_blank"  class="mx-auto font-semibold border-b font-display w-max border-slate-400">{{ title }}</a>
            <p v-else class="mx-auto font-semibold border-b cursor-not-allowed w-max font-display border-slate-400">{{ title }}</p>
            <p class="grid row-start-3 py-1 font-content">{{ description }}</p>
            <p class="grid row-start-4 grid-rows-subgrid">{{ techStack }}</p>
        </Card>
        <Card v-else container-class="grid w-full grid-cols-1 gap-1 p-2 text-center box-shadow-sm min-h-44" :class="gridClass">
            <a v-if="projectUrl" :href="projectUrl" target="_blank"  class="mx-auto font-semibold border-b font-display w-max border-slate-400">{{ title }}</a>
            <p v-else class="mx-auto font-semibold border-b cursor-not-allowed font-display w-max border-slate-400">{{ title }}</p>
            <p class="grid row-start-2 row-end-3 py-1 font-content">{{ description }}</p>
            <p class="grid row-start-4 grid-rows-subgrid">{{ techStack }}</p>
        </Card>

    </main>
    
</template>
