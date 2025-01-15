import { ref } from 'vue'
import { defineStore } from 'pinia'

// Mock Data
import { activeOrderMocks } from './mockData'
import { v4 as uuidv4 } from 'uuid'

export const useOrderStore = defineStore('orders', () => {
    const selectedOrder = ref(null)
    const activeOrders = ref(activeOrderMocks)

    const handleOrderSelect = (order) => {
        selectedOrder.value = order
    }

    const getOrderById = (id) => {
        let foundOrder = activeOrders.value.find((order) => order.id === id)
        selectedOrder.value = foundOrder
    }

    const createNewOrder = (newOrder) => {
        newOrder.id = uuidv4()
        activeOrders.value.unshift(newOrder)
    }

    const actions = {
        createNewOrder,
        handleOrderSelect,
        getOrderById,
    }
    const values = {
        selectedOrder,
        activeOrders,
    }
    return { ...actions, ...values }
})
