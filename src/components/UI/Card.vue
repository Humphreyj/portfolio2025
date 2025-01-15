<script setup>
import { ref } from 'vue'
import { getStyles } from '@/composables/getStyles'
// Components
const props = defineProps({
    containerClass: {
        type: String,
        default: '',
    },
    cardTitleClass: {
        type: String,
        default: '',
    },
    cardTitle: {
        type: String,
        default: '',
    },
})

const classes = ref(getStyles(props, 'cardStyles'))
</script>

<template>
    <div :class="classes.containerClass">
        <div class="w-full py-2">
            <header v-if="cardTitle" class="px-2">
                <h4 :class="classes.cardTitleClass">
                    {{ cardTitle }}
                </h4>
            </header>
            <slot> </slot>
        </div>
    </div>
</template>
