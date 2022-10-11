import ReactECharts from'echarts-for-react';



export const SparkLine7d = ({coin}) => {

    const ejeY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168]
    
    const data = (data) => data === null ? [] : data 
    const color = (info) => info === null ? 0 : info

    const options = {
      grid: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
      xAxis: {
        show: false,
        type: 'category',
        data: ejeY,
      },
      yAxis: {
        show: false,
        type: 'value',
        min: 'dataMin',
        max: 'dataMax',
      },
      series: [
        {
          data: data(coin.sparkline_in_7d),
          type: 'line',
          smooth: true,
          symbol: "none",
          lineStyle: {
            color: `${color(coin.change_porcentage_7d) > -0.1 ? 'rgba(27, 106, 57, 1)' : "rgba(177, 52, 52, 1)" }`,
            width: 0.9
          }
        },
      ],
    };

    return (
        <ReactECharts
            option={options}
            style = { { height : '50px' ,  width : '135px' } }
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            // onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            opts={ { renderer : 'canvas' }}
        />
    )

    
}
