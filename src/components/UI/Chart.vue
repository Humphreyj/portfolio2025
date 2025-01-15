<script setup>

// Components
import Card from '@/components/UI/Card.vue'
import MetricCard from '@/components/cards/MetricCard.vue';
const props = defineProps({
    containerClass: {
        type: String,
        default: '',
    },
    cardTitleText: {
        type: String,
        default: '',
    },
    chartType: {
        type: String,
        default: 'bar',
    },
    chartOptions: {
        type: Object,
        default: {},
    },
    chartSeries: {
        type: Object,
        default: {},
    },
})
</script>

<template>
    <section class="w-100">
        <Card v-if="chartType !== 'radialBar'" class="lg:min-h-96 xl:max-h-96 md:min-h-80">
            <apexchart
                class="flex-col-ic-jc h-fit"
                :type="chartType"
                :options="chartOptions"
                :series="chartSeries"
                :height="chartOptions.chart.height"
            >
            </apexchart>
        </Card>
        <MetricCard v-else                 
            metric-title="Progress"
            :gap-height="chartOptions.chart.height"
        >
            <apexchart
                class="mt-0 flex-col-ic-jc"
                :type="chartType"
                :options="chartOptions"
                :series="chartSeries"
                :height="chartOptions.chart.height"
            >
            </apexchart>
        </MetricCard>
    </section>
</template>

