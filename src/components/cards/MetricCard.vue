<script setup>
import { ref } from 'vue'
// Components
import Card from '@/components/UI/Card.vue'
// Icons
import { Cog6ToothIcon } from '@heroicons/vue/24/outline'
// Utils
import { getStyles } from '@/composables/getStyles'
import { handleFormat } from '@/utils/formatText'
const props = defineProps({
    metricTitle: {
        type: String,
        default: 'Metric Title',
    },
    metricValue: {
        type: [String, Number],
        default: 'Metric Value',
    },
    metricType: {
        type: String,
        default: 'text',
    },
    cardContainerClass: {
        type: String,
        default: '',
    },
    contentContainerClass: {
        type: String,
        default: '',
    },
    cardTitleClass: {
        type: String,
        default: '',
    },
    cardContentClass: {
        type: String,
        default: '',
    },
    gapHeight : {
        type: String,
        default: '24'
    }
})
// const emit = defineEmits()
const classes = ref(getStyles(props, 'metricCard'))
</script>

<template>
    <Card :container-class="classes.cardContainerClass">
        <section :class="classes.contentContainerClass">
            <div class="w-full flex-ic-jb">
                <h6 :class="classes.cardTitleClass">
                    {{ metricTitle }}
                </h6>
                <slot name="icon">
                    <Cog6ToothIcon class="-mt-1 cursor-pointer size-6" />
                </slot>
            </div>
            <div class="h-24" v-if="metricValue !== 'Metric Value'">
                <p :class="classes.cardContentClass" >
                    {{ handleFormat(metricValue, metricType) }}
                </p>
            </div>
            
            <slot></slot>
            <div class="p-1 text-xs text-white rounded-xl bg-primary-400">
                Status
            </div>
        </section>
    </Card>
</template>
