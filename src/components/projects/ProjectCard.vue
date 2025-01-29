<script setup>
import { computed } from 'vue';
// Components
import Card from '@/components/UI/Card.vue'
// Assets
import github from '@/assets/github-mark.svg'
import { EyeIcon } from '@heroicons/vue/24/solid';
const props = defineProps({
    projectImg: String,
    title: String,
    type: String,
    projectUrl: String,
    githubUrl: String,
    description: String,
    techStack: String,
})
// const emit = defineEmits()

const gridClass = computed(() => {
    if (props.type === 'frontend') {
        return 'grid-rows-[auto_auto_1fr_auto]'
    } else {
        return 'grid-rows-[auto_auto_1fr_auto]'
    }
})

</script>

<template>
    <main class="w-full md:py-2">
        <Card v-if="type==='frontend'" container-class="grid justify-center w-full grid-cols-1 gap-1  text-center min-h-[22rem] shadow-lg" :class="gridClass">
            <div class="w-full p-2">
                <img v-if="type==='frontend'" :src="projectImg" class="w-64 mx-auto border rounded-sm border-slate-300 h-44"></img>
                <a v-if="projectUrl" :href="projectUrl" target="_blank"  class="mx-auto text-lg font-semibold border-b font-display w-max border-slate-400">{{ title }}</a>
                <p v-else class="mx-auto text-lg font-semibold border-b cursor-not-allowed w-max font-display border-slate-400">{{ title }}</p>
                <p class="grid row-start-3 py-1 font-content">{{ description }}</p>
                <p class="grid row-start-4 font-semibold grid-rows-subgrid font-subtext">{{ techStack }}</p>
            </div>
            <footer class="w-full h-8 px-2 border-t flex-ic-jb">
                <a
                v-if="githubUrl"
                :href="githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                ><img :src="github" alt="" class="size-6"
            /></a>
                <a
                v-if="projectUrl" :href="projectUrl" target="_blank" rel="noopener noreferrer"
                ><EyeIcon class="size-6"/></a>
            </footer>
        </Card>
        <Card v-else container-class="grid w-full grid-cols-1 relative  gap-1 text-center shadow-lg min-h-[15rem]" >
            <div class="grid w-full p-2 grid-rows-auto">

                <a v-if="projectUrl" :href="projectUrl" target="_blank"  class=" grid grid-rows-[auto-auto-auto-2fr-2fr] mx-auto text-lg font-semibold border-b font-display w-max border-slate-400">{{ title }}</a>
                <p v-else class="mx-auto text-lg font-semibold border-b cursor-not-allowed font-display w-max border-slate-400">{{ title }}</p>
                <p class="grid row-start-2 row-end-7 py-1 min-h-32 font-content">{{ description }}</p>
                <p class="grid row-start-7 font-semibold grid-rows-subgrid font-subtext">{{ techStack }}</p>
            </div>
            <footer class="w-full h-8 px-2 border-t flex-ic-jb">
                <a
                v-if="githubUrl"
                :href="githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                ><img :src="github" alt="" class="size-6"
            /></a>
                <a
                v-if="projectUrl" :href="projectUrl" target="_blank" rel="noopener noreferrer"
                ><EyeIcon class="size-6"/></a>
            </footer>
        </Card>

    </main>
    
</template>
