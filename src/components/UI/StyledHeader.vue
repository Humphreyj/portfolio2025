<script setup>
import { computed } from 'vue'
// Components
const props = defineProps({
    title: {
        type: String,
        required: true,
        default: 'Title',
    },
    size: {
        type: String,
        required: false,
        default: 'md',
    },
})

// const emit = defineEmits()

const headerSize = computed(() => {
    // switch statement to determine the size of the header
    switch (props.size) {
        case 'sm':
            return 'text-sm'
        case 'lg':
            return 'text-xl'
        case 'xl':
            return 'text-3xl'
        default:
            return 'text-md'
    }
})

const headerTopOffset = computed(() => {
    // switch statement to determine the size of the header
    switch (props.size) {
        case 'sm':
            return 'top-2'
        case 'lg':
            return 'top-4'
        case 'xl':
            return 'top-6'
        default:
            return 'top-3'
    }
})
</script>

<template>
    <header class="relative w-full flex-col-is-js">
        <div
            class="relative z-20 w-full py-2 text-white rounded-sm bg-cardBackgroundDark"
            :class="headerSize"
        >
            <h2 class="ml-2">{{ title }}</h2>
        </div>
        <div
            class="absolute left-0 right-0 z-0 w-[95%] h-6 mx-auto translate-y-2 rounded-sm bg-cardBackgroundDark"
            :class="headerTopOffset"
        ></div>
    </header>
</template>
