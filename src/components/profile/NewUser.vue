<script setup>
import { ref } from 'vue'
// Components
import BasicForm from '@/components/forms/BasicForm.vue'
// const props = defineProps({})
// const emit = defineEmits()
const newUser = ref({
    name: '',
    address_line_1: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    created_at: '',
})
</script>

<template>
    <div class="w-full pt-6">
        <BasicForm :data="newUser" />
    </div>
</template>
