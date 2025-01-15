<script setup>
// Components
import TeamList from '@/components/UI/TeamList.vue'
import Chart from '@/components/UI/Chart.vue'
import Button from '@/components/UI/Button.vue'


</script>

<template>
    <section
        class="w-full max-w-[75rem] mx-auto primary-text px-2 font-display flex-col-ic-js overflow-hidden"
    >
        
        <section class="grid w-full h-full grid-cols-1 gap-2 mt-1 md:grid-cols-2">
           
            <TeamList />
           
        
        </section>
    </section>
</template>
