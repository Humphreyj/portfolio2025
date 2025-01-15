<script setup>
import { ref, onBeforeMount } from 'vue'
// Components
import Card from '@/components/UI/Card.vue'

import OrderDetailsCard from './OrderDetailsCard.vue'
import OrderForm from './OrderForm.vue'
// Pinia
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores/ordersStore'
// Routing
import { useRoute } from 'vue-router'
// Utils
import { useToggle } from '@vueuse/core'
// const props = defineProps({})
// const emit = defineEmits()

const { selectedOrder } = storeToRefs(useOrderStore())
const { getOrderById } = useOrderStore()
const route = useRoute()

const isEditingOrder = ref(false)
const toggleEditingOrder = useToggle(isEditingOrder)

onBeforeMount(() => {
    if (!selectedOrder.value) {
        getOrderById(route.params.id)
    }
})
</script>

<template>
    <Card>
        <OrderForm
            v-if="isEditingOrder"
            :selectedOrder="selectedOrder"
            @handle-submit="toggleEditingOrder"
        />
        <OrderDetailsCard
            v-else
            :selectedOrder="selectedOrder"
            @toggle-editing="toggleEditingOrder"
        />
    </Card>
</template>
