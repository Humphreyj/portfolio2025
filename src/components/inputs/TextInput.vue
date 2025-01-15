<script setup>
import { ref, watch, watchEffect } from 'vue'
import { getStyles } from '@/composables/getStyles'
// Components
// Utils
import { handleFormat } from '@/utils/formatText'

const props = defineProps({
    modelValue: {
        type: String,
        default: 'Default Text',
    },
    label: {
        type: String,
        default: 'Input Label',
    },
    format: {
        type: String,
    },
    maxLength: {
        type: String,
    },
    containerClass: {
        type: String,
        default: '',
    },
    labelClass: {
        type: String,
        default: '',
    },
    inputClass: {
        type: String,
        default: '',
    },
    inputName: {
        type: String,
        default: 'default-input',
    },
})
const emit = defineEmits(['update:modelValue'])
const classes = ref(getStyles(props, 'textInput'))

const inputValue = ref(props.modelValue)

const handleInput = (e, type) => {
    inputValue.value = e.target.value
    // let result = handleFormat(inputValue.value, type)

    // emit('update:modelValue', result)
}

watch(inputValue, (newVal) => {
    inputValue.value = handleFormat(newVal, props.format)
    emit('update:modelValue', inputValue.value)
})

watchEffect(() => {
    inputValue.value = handleFormat(props.modelValue, props.format)
    emit('update:modelValue', inputValue.value)
})
</script>

<template>
    <div :class="classes.containerClass">
        <label :for="inputName" :class="classes.labelClass">{{ label }}</label>
        <input
            :name="inputName"
            :value="inputValue"
            type="text"
            :maxlength="maxLength"
            :class="classes.inputClass"
            @input="($event) => handleInput($event, format)"
        />
    </div>
</template>
