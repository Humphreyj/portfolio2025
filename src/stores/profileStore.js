import { ref } from 'vue'
import { defineStore } from 'pinia'

// Mock Data
import { userProfileMocks } from './mockData'
import { v4 as uuidv4 } from 'uuid'

export const useProfileStore = defineStore('profiles', () => {
    const selectedUser = ref(null)
    const userProfiles = ref(userProfileMocks)
    const currentUser = ref('c847868d-dffb-4d1e-a385-74dd578c46a7')

    const handleUserSelect = (user) => {
        selectedUser.value = user
    }
    
    const getProfileById = (id) => {
        let found = userProfiles.value.find((profile) => profile.id === id)
        selectedUser.value = found
    }

    const createNewProfile = (newUser) => {
        newUser.id = uuidv4()
        userProfiles.value.unshift(newUser)
    }

    const actions = {
        createNewProfile,
        handleUserSelect,
        getProfileById,
    }
    const values = {
        selectedUser,
        userProfiles,
        currentUser,
    }
    return { ...actions, ...values }
})
