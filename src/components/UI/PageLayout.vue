<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
// Components

// const props = defineProps({})
// const emit = defineEmits()
const route = useRoute()
const routeLoaded = ref(false)
onMounted(() => {
    routeLoaded.value = route.meta.viewLoaded
})
</script>

<template>
    <main class="flex-col-ic-jc">
        <slot name="top-content">
            <section class="w-11/12 mx-auto bg-gray-300"></section>
        </slot>
        <transition name="fade">
            <slot v-if="routeLoaded" name="main-content">
                <section
                    class="flex-col-ic-js w-11/12 mx-auto h-dvh bg-gray-200"
                >
                    This is a main content sections
                </section>
            </slot>
        </transition>
        <section class="flex-ic-jc w-full border-t h-20">
            This will be a footer
        </section>
    </main>
</template>
