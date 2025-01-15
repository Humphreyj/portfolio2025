<script setup>
import { ref } from 'vue'
// Components
import TextInput from '@/components/inputs/TextInput.vue'
import Button from '@/components/UI/Button.vue'
import BasicSelect from '@/components/inputs/BasicSelect.vue'
// Pinia
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores/ordersStore'
// Data
import states from '@/constants/states'
// const props = defineProps({
//     selectedOrder: {
//         type: Object,
//     },
// })
const { selectedOrder } = storeToRefs(useOrderStore())
const emit = defineEmits(['handle-submit'])

const submitForm = (e) => {
    e.preventDefault()
    emit('handle-submit')
}
</script>

<template>
    <form class="w-full gap-1 px-2 py-4 mx-auto flex-col-ic-js">
        <h4 data-test="selected-order-number" class="my-2 title-text">
            Order # {{ selectedOrder.number }}
        </h4>
        <section class="w-full gap-3 flex-col-ic-js">
            <div class="w-full gap-3 flex-ic-jb">
                <TextInput
                    v-model="selectedOrder.destination.address_line_1"
                    data-test="address_line_1"
                    label="Street Address"
                />
                <TextInput
                    v-model="selectedOrder.destination.city"
                    data-test="address_city"
                    label="City"
                />
            </div>
            <div class="w-full gap-3 flex-ic-jb">
                <BasicSelect
                    v-model="selectedOrder.destination.state"
                    data-test="address_state"
                    label="State"
                    :options="states"
                />
                <TextInput
                    v-model="selectedOrder.destination.zip"
                    data-test="address_zip"
                    label="Zip"
                    max-length="5"
                />
            </div>
            <BasicSelect
                v-model="selectedOrder.courier.name"
                data-test="order_courier"
                label="Courier"
                :options="[
                    {
                        label: `${selectedOrder.courier.name}`,
                        value: `${selectedOrder.courier.name}`,
                    },
                ]"
            />
            <Button text="Save" @click="($event) => submitForm($event)" />
        </section>
    </form>
</template>
