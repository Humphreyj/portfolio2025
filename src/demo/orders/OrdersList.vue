<script setup>
// Components
import Card from '@/components/UI/Card.vue'
import OrderListCard from './OrderListCard.vue'
import MobileOrderListCard from './MobileOrderListCard.vue'
import OrderForm from './OrderForm.vue'
// Pinia
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores/ordersStore'
// Assets
// Utils
import { OnClickOutside } from '@vueuse/components'

// const props = defineProps({})
// const emit = defineEmits()
const { activeOrders, selectedOrder } = storeToRefs(useOrderStore())
const { handleOrderSelect } = useOrderStore()

const selectOrder = (order) => {
    handleOrderSelect(order)
}
</script>

<template>
    <OnClickOutside
        @trigger="selectOrder(null)"
        class="relative grid w-full gap-4 px-2 mx-auto mb-4 md:grid-cols-3 primary-text"
    >
        <Card
            card-title="Active Orders"
            container-class="md:col-span-2"
            card-title-class="py-1 text-3xl md:text-xl"
        >
            <header
                class="relative items-center hidden w-full grid-cols-[0.5fr_1.5fr_1fr_1fr_1fr_1fr] px-2 py-2 mb-2 text-xl font-medium font-display md:grid"
            >
                <p>Id</p>
                <p>Destination</p>
                <p>Courier</p>
                <p>Date</p>
                <p>Status</p>
                <p>Total</p>
            </header>
            <section class="w-full border-t">
                <OrderListCard
                    v-for="order in activeOrders"
                    :key="order.id"
                    :order="order"
                    @select-order="selectOrder"
                />
                <MobileOrderListCard
                    v-for="(order, i) in activeOrders"
                    :key="i"
                    :order="order"
                />
            </section>
        </Card>
        <Card
            card-title="Order Details"
            container-class="hidden md:inline-block "
        >
            <section class="flex-col-ic-js">
                <OrderForm
                    v-if="selectedOrder"
                    :selectedOrder="selectedOrder"
                />
                <h3 v-else class="primary-text">
                    Select an order to view details
                </h3>
            </section>
        </Card>
    </OnClickOutside>
</template>
