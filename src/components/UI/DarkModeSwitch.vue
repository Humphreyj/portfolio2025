<script setup>
// Assets
import MoonIcon from '@/assets/MoonIcon.vue'
import SunIcon from '@/assets/SunIcon.vue'
// Components
const props = defineProps({
    isDark: Boolean,
})
const emit = defineEmits(['toggle'])
</script>

<template>
    <div
        class="relative w-1/2 h-8 mt-6 border-2 border-gray-700 rounded-full cursor-pointer dark:border-gray-500 md:w-1/4"
        @click="emit('toggle')"
    >
        <MoonIcon
            v-if="isDark"
            class="absolute left-0 w-6 h-6 mt-[4px] ml-1 motion-duration-1500 motion-scale-out-0 motion-translate-y-in-100 primary-text"
        />
        <SunIcon
            v-if="!isDark"
            class="absolute right-0 w-6 h-6 mt-[3px] mr-1 motion-duration-1500 motion-translate-y-in-100 motion-scale-out-0 primary-text"
        />
    </div>
</template>
