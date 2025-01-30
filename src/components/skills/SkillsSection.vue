<script setup>
// Components
// const props = defineProps({})
// const emit = defineEmits()
const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Node.js',
    'Express',
    'React',
    'Vue',
    'Tailwind',
    'Redux',
    'Pinia',
    'Python',
    'Postgres',
    'SQL',
    'TypeScript',
    'Bootstrap',
    'Cypress',
    'Vitest',
    'Jest',
]
</script>

<template>
    <section
        class="absolute w-full px-4 overflow-y-scroll border-t bottom-6 lg:bottom-0 h-1/4 md:h-min overscroll-contain md:overflow-y-auto"
    >
        <div class="relative flex-col-ic-js">
            <p class="my-2 text-lg font-bold text-center">Technical Skills</p>
            <div
                class="relative grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3"
            >
                <div
                    v-for="(skill, i) in skills"
                    :key="i"
                    class="w-full p-1 font-semibold text-center border border-black rounded-md shadow font-subtext"
                >
                    {{ skill }}
                </div>
            </div>
        </div>
    </section>
</template>
