<script setup>
import router from '@/router'
// Components
import ListCard from '@/components/UI/ListCard.vue'
import TextBlock from '@/components/UI/TextBlock.vue'
// Pinia
import { useOrderStore } from '@/stores/ordersStore'
// Assets

// Utils
import { handleFormat } from '@/utils/formatText'
const props = defineProps({
    order: {
        type: Object,
        required: true,
    },
})
// const emit = defineEmits()
const { handleOrderSelect } = useOrderStore()
const selectOrder = (order) => {
    handleOrderSelect(order)
    router.push({ name: 'Order Details', params: { id: order.id } })
}
</script>

<template>
    <ListCard class="md:hidden" @click="selectOrder(order)">
        <div
            class="relative items-start w-full gap-3 flex-col-is-js font-content"
        >
            <div class="w-full flex-is-js">
                <TextBlock label="Order" :text-content="order.number" />
                <TextBlock
                    label="Date"
                    :text-content="
                        handleFormat(order.scheduled_delivery, 'date')
                    "
                />
            </div>

            <div class="w-full gap-1 flex-is-js">
                <TextBlock label="Courier" :text-content="order.courier.name" />
                <TextBlock
                    label="Destination"
                    :text-content="handleFormat(order.destination, 'address')"
                />
            </div>
            <div class="w-full gap-1 flex-is-js">
                <TextBlock
                    label="Status"
                    :text-content="handleFormat(order.status, 'title')"
                />
                <TextBlock
                    label="Total"
                    :text-content="handleFormat(order.order_total, 'currency')"
                />
            </div>
        </div>
    </ListCard>
</template>
