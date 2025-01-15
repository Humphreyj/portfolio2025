import { useDark } from '@vueuse/core'
import { watch, ref } from 'vue'
const isDark = ref(useDark())
const textColor = isDark.value ? '#ffffff' : '#000000'

/*
    Watches the darkMode value to re-render the graphs since they
    take their rules on render
    -> updateOptions merges the options object with the original
        and only overwrites the changes
*/
watch(
    () => isDark.value,
    (value) => {
        if(value){
            ApexCharts.exec('pieChart', 'updateOptions', {
                title: {
                    text: 'Pie Chart',
                    style: {
                        color: "#ffffff"
                    }
                },
                legend: {
                    position: 'right',
                    labels: {
                        colors: "#ffffff",
                        useSeriesColors: false
                    }, 
                },
            }, false, true)

        } else {
            ApexCharts.exec('pieChart', 'updateOptions', {
                title: {
                    text: 'Pie Chart',
                    style: {
                        color: "#000000"
                    }
                },
                legend: {
                    position: 'right',
                    labels: {
                        colors: "#000000",
                        useSeriesColors: false
                    }, 
                },
            }, false, true)
        }
    }
  )
export const pieChartOptions = {
    
    chart: {
        height: '300',
        type: 'pie',
        id: 'pieChart',
    },
    plotOptions: {
        pie: {
          dataLabels: {
            offset: -10,
          }, 
        }
      },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    
    dataLabels: {
       
    },
    
    title: {
        text: 'Pie Chart',
        style: {
            color: textColor
        }
    },
    legend: {
        position: 'right',
        labels: {
            colors: textColor,
            useSeriesColors: false
        }, 
    },
     
};
export const pieSeries = {
    name: 'series-1',
    data: [44, 55, 41, 17, 15]
}
export const pieMethods = {
    
    update: function () {
        let newSeries = [16, 32, 64, 8, 2]
        ApexCharts.exec('pieChart', 'updateSeries', newSeries, true)
    },
    randomize: function () {
        let randomSeries = [16, 32, 64, 8, 2]
        

        for (let index = 0; index < randomSeries.length; index++) {
            let randInt = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            randomSeries[index] = randInt;
            
        }
        let newSeries = randomSeries
        ApexCharts.exec('pieChart', 'updateSeries', newSeries)

    }
}