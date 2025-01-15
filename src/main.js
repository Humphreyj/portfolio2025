import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from 'vue3-apexcharts'
import router from '@/router'
import './style.css'
import App from './App.vue'
// Pinia
import { useRuntimeStore } from './stores/runtimeStore'
import { storeToRefs } from 'pinia'

const initializeApp = async () => {
    // Fetch and parse the config file
    const configResponse = await fetch('/config.json')
    const configJson = await configResponse.json()
    const pinia = createPinia()
    createApp(App).use(pinia).use(router).use(VueApexCharts).mount('#app')

    // Set config vars after app is initialized.
    const { configOptions } = storeToRefs(useRuntimeStore())
    configOptions.value = configJson
}

initializeApp()
