<script setup>
// Components
import { ref } from 'vue'
import { getStyles } from '@/composables/getStyles'
const props = defineProps({
    label: {
        type: String,
        default: null,
    },
    textContent: {
        type: [String, Number],
        default: 'Text Content',
    },
    labelClass: {
        type: String,
        default: '',
    },
    contentClass: {
        type: String,
        default: '',
    },
    containerClass: {
        type: String,
        default: '',
    },
})
const classes = ref(getStyles(props, 'textBlock'))
</script>

<template>
    <div :class="classes.containerClass">
        <p :class="classes.labelClass" v-if="label">
            {{ label }}
        </p>
        <slot>
            <div class="min-h-6">
                <p :class="classes.contentClass">{{ textContent }}</p>
            </div>
        </slot>
    </div>
</template>
