import ReactECharts from'echarts-for-react';



const upColor = '#ec0000';
const upBorderColor = '#8A0000';
const downColor = '#00da3c';
const downBorderColor = '#008F28';


export const ChartMarketOHLC = ({ dataOHLC }) => {

    
  const options = {
    dataset: {
      source: dataOHLC
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line'
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
        // bottom: 200
        bottom: 100
      },
      {
        left: '10%',
        right: '10%',
        height: 80,
        // bottom: 80
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
    visualMap: {
      show: false,
      seriesIndex: 1,
      dimension: 6,
      pieces: [
        {
          value: 1,
          color: upColor
        },
        {
          value: -1,
          color: downColor
        }
      ]
    },
    series: [
      {
        type: 'candlestick',
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: upBorderColor,
          borderColor0: downBorderColor
        },
        encode: {
          x: 0,
          y: [1, 4, 3, 2]
        }
      },
      // {
      //   name: 'Volumn',
      //   type: 'bar',
      //   xAxisIndex: 1,
      //   yAxisIndex: 1,
      //   itemStyle: {
      //     color: '#7fbe9e'
      //   },
      //   large: true,
      //   encode: {
      //     x: 0,
      //     y: 5
      //   }
      // }
    ]
  };

  return (
    <ReactECharts
          option={options}
          style = { { height : '600px' ,  width : '100%' } }
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
          // onChartReady={this.onChartReadyCallback}
          // onEvents={EventsDict}
          opts={ { renderer : 'canvas' }}
    />
  )

    
}