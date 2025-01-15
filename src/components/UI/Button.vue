<script setup>
import { getStyles } from '@/composables/getStyles'
// Components
const props = defineProps({
    text: {
        type: String,
        default: 'Text',
    },
    buttonClass: {
        type: String,
        default: '',
    },
    buttonType: {
        type: String,
        default: 'defaultButton',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
})
// const emit = defineEmits()
const classes = getStyles(props, props.buttonType, 'buttons')
</script>

<template>
    <button
        data-test="button-text"
        :class="classes.buttonClass"
        :disabled="disabled"
    >
        {{ text }}
    </button>
</template>
