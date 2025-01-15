import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRuntimeStore = defineStore('runtimeStore', () => {
    const clientName = ref('')
    const configOptions = ref({
        clientName: 'New Client',
    })

    const values = {
        clientName,
        configOptions,
    }
    const actions = {}

    return {
        ...values,
        ...actions,
    }
})
