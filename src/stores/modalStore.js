import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modalStore', () => {
    const handleModal = (isShowing) => {
        const showing = ref(isShowing ?? false)
        const toggle = () => {
            showing.value = !showing.value
        }
        const show = () => {
            showing.value = true
        }
        const hide = () => {
            showing.value = false
        }

        return {
            showing,
            toggle,
            show,
            hide,
        }
    }

    const memberSettingsModal = ref(handleModal(false))
    const notificationModal = ref(handleModal(false))
    const profileFormModal = ref(handleModal(false))
    const avatarModal = ref(handleModal(false))

    // Array of objects to pass into the Modal component so that it can stay dynamic
    // This implementation of the modal is in AppHeader to handle the notification dropdown
    const notificationModalContent = ref([
        {
            titleText: 'Messages',
            content: 'You have 6 new messages',
        },
        {
            titleText: 'Orders',
            content: 'There are 3 new orders',
        },
    ])
    const avatarModalContent = ref([
        {
            content: 'Profile'
        },
        {
            content: 'Settings'
        },
        {
            content: 'Inbox'
        },
        {
            content: 'Logout'
        }
    ])

    const changeTeamMember = (member) => {
        selectedTeamMember.value = member
    }
    const selectedTeamMember = ref({})
    const actions = {
        changeTeamMember,
    }
    const values = {
        notificationModalContent,
        avatarModalContent,
        memberSettingsModal,
        notificationModal,
        profileFormModal,
        avatarModal,
        selectedTeamMember,

    }
    return { ...actions, ...values }
})
