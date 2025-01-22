<script setup>
// Components
// const props = defineProps({})
// const emit = defineEmits()
const skills = [
    'HTML',
    'CSS',
    'Tailwind',
    'JavaScript',
    'Node.js',
    'Express',
    'React',
    'Vue',
    'Redux',
    'Pinia',
    'Postgres',
    'Python',
    'SQL',
    'TypeScript',
    'Bootstrap',
    'Sass',
    'Less',
]
</script>

<template>
    <section
        class="absolute w-full border-t px-4 pt-2 bottom-1 h-[60%] md:h-[40%] overflow-y-scroll md:overflow-y-auto"
    >
        <div class="relative flex-col-ic-js">
            <p class="my-2 text-lg font-bold text-center">Technical Skills</p>
            <div
                class="relative grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3"
            >
                <div
                    v-for="(skill, i) in skills"
                    :key="i"
                    class="w-full p-1 border border-black rounded-md font-display"
                >
                    {{ skill }}
                </div>
            </div>
        </div>
    </section>
</template>
