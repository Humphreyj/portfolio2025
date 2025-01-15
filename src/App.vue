<script setup>
import { RouterView } from 'vue-router'
import Sidedrawer from '@/components/UI/Sidedrawer.vue'
import AppHeader from '@/components/UI/AppHeader.vue'
import ModalContainer from '@/components/UI/ModalContainer.vue'
</script>

<template>
    <div
        class="overflow-y-auto h-dvh bg-appBackground dark:bg-appBackgroundDark flex-is-js"
    >
        <Sidedrawer />
        <ModalContainer />

        <section class="w-full overflow-y-scroll">
            <AppHeader />
            <RouterView v-slot="{ Component, route }">
                <!-- Use a custom transition or fallback to `fade` -->
                <!-- <transition :name="route.meta.transition || 'fade'"> -->
                <component :is="Component" />
                <!-- </transition> -->
            </RouterView>
        </section>
    </div>
</template>

<style>
/* width */
::-webkit-scrollbar {
    width: 1px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #555;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
