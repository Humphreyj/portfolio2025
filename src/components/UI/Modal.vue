<script setup>
// Pinia / Store data
import { useModalStore } from '@/stores/modalStore'
import { storeToRefs } from 'pinia'
//const { showModal } = storeToRefs(useModalStore())

//Props
const props = defineProps({
    textClass: {
        type: String,
        default: '',
    },
    backdropClass: {
        type: String,
        default: '',
    },
    containerClass: {
        type: String,
        default: 'mb-2',
    },
    titleClass: {
        type: String,
        default: '',
    },
    modalContent: {
        type: Object,
        default: {},
    },
    modalContentClass: {
        type: String,
        default: '',
    },
    showModal: {
        type: Boolean,
    },
    toggleModal: {
        type: Function,
    },
})
// Utils
import { getStyles } from '@/composables/getStyles'
const classes = getStyles(props, 'modal')
</script>

<template>
    <section v-if="showModal" class="relative">
        <div
            id="backdrop"
            :class="classes.backdropClass"
            @click="toggleModal"
        ></div>
        <section :class="classes.containerClass">
            <slot></slot>
        </section>
    </section>
</template>
