<script setup>
// Components
import Modal from '@/components/UI/Modal.vue'
import TextBlock from '@/components/UI/TextBlock.vue'
// Pinia
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modalStore'
const { selectedTeamMember, memberSettingsModal } = storeToRefs(useModalStore())

// Utils
</script>

<template>
    <Modal
        container-class="absolute h-64 md:w-1/2 sm:w-3/4 md:inset-80 inset-10"
        backdrop-class="w-screen bg-black opacity-50 "
        :show-modal="memberSettingsModal.showing"
        :toggle-modal="memberSettingsModal.toggle"
    >
        <TextBlock 
            label='Name: '
            :text-content="selectedTeamMember.name"
            content-class="indent-2"
        />
        <TextBlock
            label='Email: '
            :text-content="selectedTeamMember.email"
            content-class="indent-2"
        />
        <TextBlock label="Phone:" :text-content="selectedTeamMember.phone" content-class="indent-2"/>
        <TextBlock 
            label='Address: '
            :text-content="selectedTeamMember.address_line_1 + ' ' + selectedTeamMember.city + ', ' + selectedTeamMember.state"
            content-class="indent-2"
        />

    </Modal>
</template>
