import { useDark } from '@vueuse/core'
import { watch, ref } from 'vue'
const isDark = ref(useDark())
const textColor = isDark.value ? '#ffffff' : '#000000'

/*
    Watches the darkMode value to re-render the graphs since they
    take their rules on render
    -> updateOptions merges the options object with the original
        and oly overwrites the changes
*/
watch(
    () => isDark.value,
    (value) => {
        if (value) {
            ApexCharts.exec(
                'barChart',
                'updateOptions',
                {
                    xaxis: {
                        categories: [
                            1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
                        ],
                        labels: {
                            style: {
                                colors: '#ffffff',
                                fontSize: '',
                            },
                        },
                    },
                    yaxis: {
                        labels: {
                            style: {
                                colors: '#ffffff',
                            },
                        },
                    },
                    dataLabels: {
                        style: {
                            colors: ['#ffffff'],
                        },
                    },
                    title: {
                        style: {
                            color: '#ffffff'
                        }
                    }
                },
                false,
                true
            )
        } else {
            ApexCharts.exec(
                'barChart',
                'updateOptions',
                {
                    xaxis: {
                        categories: [
                            1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
                        ],
                        labels: {
                            style: {
                                colors: '#000000',
                                fontSize: '',
                            },
                        },
                    },
                    yaxis: {
                        labels: {
                            style: {
                                colors: '#000000',
                            },
                        },
                    },
                    dataLabels: {
                        style: {
                            colors: ['#000000'],
                        },
                    },
                    title: {
                        style: {
                            color: '#000000'
                        }
                    }
                },
                false,
                true
            )
        }
    }
)

export const barChartOptions = {
    chart: {
        id: 'barChart', // or use a dynamic value if needed
        height: 'auto',
        sparkline: {
            enabled: false
        }
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        labels: {
            style: {
                colors: textColor,
                fontSize: '',
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: textColor,
            },
        },
    },
    dataLabels: {
        style: {
            colors: [textColor],
        },
    },
    title: {
        text: 'Fiction Books Sales',
        style: {
            color: textColor
        }
    },
}
export const barSeries = [
    {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
]
export const barMethods = {
    
    update: function () {
        let newSeries = [{
            data: [80, 95, 20, 10, 42, 65, 19, 91]
        }]
        
        
        ApexCharts.exec('barChart', 'updateSeries', newSeries, true)
    },
    randomize: function () {
        let randomSeries = [80, 95, 20, 10, 42, 65, 19, 91]
        

        for (let index = 0; index < randomSeries.length; index++) {
            let randInt = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            randomSeries[index] = randInt;
            
        }
        let newSeries = [{
            data: randomSeries
        }]
        ApexCharts.exec('barChart', 'updateSeries', newSeries)

    }
}