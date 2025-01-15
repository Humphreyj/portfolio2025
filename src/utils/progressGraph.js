import { useDark,} from '@vueuse/core'
import { watch, ref } from 'vue'
const isDark = ref(useDark())
const textColor = isDark.value ? '#ffffff' : '#000000'
watch(
    () => isDark.value,
    (value) => {
        if(value){
            ApexCharts.exec('progressBar', 'updateOptions', {
                title: {
                    style: {
                        color: "#ffffff"
                    }
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                show: true,
                                color: "#ffffff",
                            },
                            value: {
                                fontSize: '22px',
                                color: "#ffffff"
                            },
                        }
                    }
                }
            }, false, true)

        } else {
            ApexCharts.exec('progressBar', 'updateOptions', {
                title: {
                    style: {
                        color: "#000000"
                    }
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                show: true,
                                color: "#000000",
                            },
                            value: {
                                fontSize: '22px',
                                color: "#000000"
                            },
                        }
                    }
                }
            }, false, true)
        }
    }
)
export const progressGraphOptions = {

    chart: {
        offsetY: -15,
        height: '150px',
        sparkline: {
            enabled: true
        },
        id: 'progressBar'
    },
    
    plotOptions: {
        radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
            background: "#e7e7e7",
            strokeWidth: '97%',
            margin: 5, // margin is in pixels
            dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: '#999',
                opacity: 1,
                blur: 2
            }
        },
        dataLabels: {
            name: {
                show: true,
                color: textColor,
                offsetY: 20
            },
            value: {
                offsetY: -20,
                fontSize: '22px',
                color: textColor
            },
        }
        }
    },
    grid: {
        padding: {
            top: -10
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
        shade: 'light',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91]
        },
    },
    labels: ['Average Results'],
} 

export const progressSeries = [63]

export const progressMethods = {
    
    update: function () {
        let newSeries = [70]
        ApexCharts.exec('progressBar', 'updateSeries', newSeries, true)
    },
    randomize: function () {
        let randInt = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        let randomSeries = [randInt]
        console.log(randomSeries)
        

        
        ApexCharts.exec('progressBar', 'updateSeries', randomSeries)

    }
}


