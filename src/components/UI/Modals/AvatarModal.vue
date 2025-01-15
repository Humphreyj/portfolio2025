<script setup>
import { getStyles } from '@/composables/getStyles'
import router from '@/router'
// Components
import Modal from '@/components/UI/Modal.vue'
import TextBlock from '@/components/UI/TextBlock.vue'

// Pinia
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modalStore'
import { useProfileStore } from '@/stores/profileStore'

// Modal Store

const { avatarModalContent, avatarModal } = storeToRefs(
    useModalStore()
)
const {currentUser} = storeToRefs(useProfileStore())

// Props
const props = defineProps({
    containerClass: {
        type: String,
        default: '',
    },
})
// Utils
const classes = getStyles(props, 'notificationModal')

// Have this hard coded for now as a proof of concept
const handleNav = (path) => {
    console.log(path)
    if(path === 'Profile'){
        router.push(`/profiles/details/${currentUser.value}`)

    }
    
}
</script>

<template>
    <div class="relative">
        <Modal
            container-class="right-12 top-12"
            backdrop-class="w-screen"
            :show-modal="avatarModal.showing"
            :toggle-modal="avatarModal.toggle"
        >
            <TextBlock
                v-for="item in avatarModalContent"
                :text-content="item.content"
                :container-class="classes.containerClass"
                @click="handleNav(item.content)"
            />
        </Modal>
    </div>
</template>
