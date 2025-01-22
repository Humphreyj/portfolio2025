<script setup>
// Components
// const props = defineProps({})
// const emit = defineEmits()
const skills = [
    'HTML',
    'CSS',
    'Tailwind',
    'JavaScript',
    'React',
    'Vue',
    'Node.js',
    'Express',
    'MongoDB',
    'Postgre',
    'Python',
    'SQL',
    'TypeScript',
    'Bootstrap',
    'Sass',
    'Less',
]
</script>

<template>
    <section class="absolute bottom-0 w-full border-t h-1/3">
        <div class="relative flex-col-is-js">
            <p class="px-4 text-lg font-bold text-center">Technical Skills</p>
            <div class="relative flex-wrap gap-3 flex-is-js">
                <div
                    v-for="(skill, i) in skills"
                    :key="i"
                    class="p-1 border border-black rounded-md max-w-24"
                >
                    {{ skill }}
                </div>
            </div>
        </div>
    </section>
</template>
