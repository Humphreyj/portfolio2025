<script setup>
// Components
import MetricCard from '@/components/cards/MetricCard.vue'
import Card from '@/components/UI/Card.vue'
import Chart from '@/components/UI/Chart.vue'


// Chart Data/Methods
import { barChartOptions } from '@/utils/barGraph.js'
import { barSeries } from '@/utils/barGraph.js'
import { pieChartOptions } from '@/utils/pieGraph.js'
import { pieSeries } from '@/utils/pieGraph.js'
import { progressGraphOptions } from '@/utils/progressGraph.js'
import { progressSeries } from '@/utils/progressGraph.js'


import { progressMethods } from '@/utils/progressGraph.js'
import { barMethods } from '@/utils/barGraph.js'
import { pieMethods } from '@/utils/pieGraph.js'

import MessagesList from '@/demo/MessagesList.vue'
// Pinia

// Utils
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <section
        class="w-full max-w-[75rem] mx-auto primary-text px-2 font-display flex-col-ic-js"
    >
        <section class="grid w-full grid-cols-2 gap-2 mt-8 md:grid-cols-4">
            <MetricCard
                metric-title="Visitors"
                :metric-value="12078"
                metric-type="number"
            />
            <MetricCard
                metric-title="Revenue"
                :metric-value="12078"
                metric-type="currency"
            />
            <MetricCard
                metric-title="Active Users"
                :metric-value="1245"
                metric-type="number"
            />
            
            <Chart
                chart-type="radialBar"
                :chart-options="progressGraphOptions"
                :chart-series="progressSeries"
            />
            
            
        </section>
        <section class="grid w-full grid-cols-1 gap-2 mt-3 md:grid-cols-2">
            <Chart
                chart-type="bar"
                :chart-options="barChartOptions"
                :chart-series="barSeries"
            />
            <Chart
                chart-type="pie"
                :chart-options="pieChartOptions"
                :chart-series="pieSeries.data"
            />
        </section>
        <Card container-class="mt-2">
            <section class="flex-col-is-js md:flex-ic-js md:flex-row">
                <MessagesList />
            </section>
        </Card>
    </section>
</template>
