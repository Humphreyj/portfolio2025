<script setup>
// Components
import Button from '@/components/UI/Button.vue'
import TextBlock from '@/components/UI/TextBlock.vue'
// Utils
import { handleFormat } from '@/utils/formatText'

const props = defineProps({
    selectedOrder: {
        type: Object,
    },
})
const emit = defineEmits(['toggle-editing'])
</script>

<template>
    <main class="w-full gap-3 p-2 mx-auto flex-col-ic-js">
        <div class="w-full flex-ic-jb">
            <h4 data-test="selected-order-number" class="title-text">
                Order # {{ selectedOrder.number }}
            </h4>
            <Button text="Edit" @click="emit('toggle-editing')" />
        </div>
        <section class="w-full gap-3 flex-is-js">
            <div id="map" class="p-2 border size-32 bg-secondary-400"></div>
            <div class="w-10/12 gap-2 flex-col-ic-js">
                <TextBlock
                    label="Destination"
                    :text-content="
                        handleFormat(selectedOrder.destination, 'address')
                    "
                />
                <TextBlock
                    label="Status"
                    :text-content="handleFormat(selectedOrder.status, 'title')"
                />
            </div>
        </section>
        <div class="w-full flex-ic-jb">
            <TextBlock
                label="Courier"
                :text-content="selectedOrder.courier.name"
            />
            <TextBlock
                label="Total"
                :text-content="
                    handleFormat(selectedOrder.order_total, 'currency')
                "
            />
        </div>
    </main>
</template>
