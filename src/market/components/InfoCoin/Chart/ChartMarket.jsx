import ReactECharts from'echarts-for-react';



export const ChartMarket = ({ data = [] }) => {

  const options = {
    dataset: {
      source: data
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function (params) {
        return `
        Date: ${params[0].value[0]}
        Price: ${params[0].value[1]}
        `
      }
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: false
        }
      }
    },
    grid: [
      {
        left: '10%',
        right: '10%',
        bottom:  100
      },
      {
        left: '10%',
        right: '10%',
        height: 80,
        bottom: 0
      }
    ],
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        // inverse: true,
        axisLine: { onZero: false },
        splitLine: { show: false },
        min: 'dataMin',
        max: 'dataMax'
      },
      {
        type: 'category',
        gridIndex: 1,
        boundaryGap: false,
        axisLine: { onZero: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        min: 'dataMin',
        max: 'dataMax'
      }
    ],
    yAxis: [
      {
        scale: true,
        splitArea: {
          show: true
        }
      },
      {
        scale: true,
        gridIndex: 1,
        splitNumber: 2,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false }
      }
    ],
    dataZoom: [
      {
        type: 'inside',
        xAxisIndex: [0, 1],
        start: 10,
        end: 100
      },
      {
        show: true,
        xAxisIndex: [0, 1],
        type: 'slider',
        bottom: 10,
        start: 10,
        end: 100
      }
    ],
    series: [
      {
        type: 'line',
        encode: {
          x: 0,
          y: [1, 4, 3, 2]
        }
      }
    ]
  };
  return (
    <ReactECharts
        option={options}
        style = { { width : 'auto', height: '500px' } }
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
        opts={ { renderer : 'canvas' }}
    />
  )

    
}