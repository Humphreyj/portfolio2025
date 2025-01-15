import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useToggle } from '@vueuse/core'

export const usePrimaryStore = defineStore('primary', () => {
    const showSidebar = ref(false)
    const toggleSidebar = useToggle(showSidebar)
    const sampleUser = ref({
        name: 'Test Testman',
        address_line_1: '123 Test Drive',
        city: 'Testville',
        state: 'tx',
        zip: '44343',
        email: 'testman@bestman.com',
        phone: '232-232-3333',
        created_at: '2024-08-30T18:14:55.119Z',
    })

    const actions = {
        toggleSidebar,
    }
    const values = {
        sampleUser,
        showSidebar,
    }
    return { ...actions, ...values }
})
