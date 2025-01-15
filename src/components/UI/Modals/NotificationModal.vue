<script setup>
import { getStyles } from '@/composables/getStyles'

// Components
import Modal from '@/components/UI/Modal.vue'
import TextBlock from '@/components/UI/TextBlock.vue'
import Button from '@/components/UI/Button.vue'

// Pinia
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modalStore'

// Modal Store

const { notificationModalContent, notificationModal } = storeToRefs(
    useModalStore()
)

// Props
const props = defineProps({
    containerClass: {
        type: String,
        default: '',
    },
    iconClass: {
        type: String,
        default: '',
    },
})
// Utils
const classes = getStyles(props, 'notificationModal')
</script>

<template>
    <div class="relative">
        
        <Modal
            container-class="right-24 top-12"
            backdrop-class="w-screen"
            :show-modal="notificationModal.showing"
            :toggle-modal="notificationModal.toggle"
        >
            <TextBlock
                v-for="item in notificationModalContent"
                :label="item.titleText"
                :text-content="item.content"
                :container-class="classes.containerClass"
            />
        </Modal>
    </div>
</template>
