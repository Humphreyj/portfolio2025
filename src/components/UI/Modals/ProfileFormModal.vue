<script setup>
import { ref } from 'vue'
// Components
import Modal from '../Modal.vue'
import BasicForm from '@/components/forms/BasicForm.vue'
// const props = defineProps({})
// const emit = defineEmits()
const newUser = ref({
    name: '',
    address_line_1: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone: '',
    created_at: '',
})
// Pinia
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modalStore'
import { useProfileStore } from '@/stores/profileStore'

const { profileFormModal } = storeToRefs(useModalStore())
const { createNewProfile } = useProfileStore()

const handleCreateProfile = (newProfileData) => {
    createNewProfile(newProfileData)
    profileFormModal.value.hide()
    newUser.value = {
        name: '',
        address_line_1: '',
        city: '',
        state: '',
        zip: '',
        email: '',
        phone: '',
        created_at: '',
    }
}
// Utils
</script>

<template>
    <Modal
        container-class="absolute h-[44rem] md:left-1/3 top-10 w-full md:w-1/2 border-none bg-transparent"
        backdrop-class="w-screen bg-black opacity-50"
        :show-modal="profileFormModal.showing"
        :toggle-modal="profileFormModal.toggle"
    >
        <BasicForm
            form-title="Add User"
            :data="newUser"
            @handle-submit="handleCreateProfile"
        />
    </Modal>
</template>
