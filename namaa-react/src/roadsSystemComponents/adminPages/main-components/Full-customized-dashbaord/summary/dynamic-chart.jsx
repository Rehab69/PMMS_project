// import React, { Component } from 'react';
// import ReactApexChart from 'react-apexcharts';
// import { ApexCharts } from 'react-apexcharts'

// const RegionRoadsDynamic = (props) => {

//   const arrayData = [
//     {
//       y: 400,
//       quarters: [
//         {
//           x: "Q1",
//           y: 120
//         },
//         {
//           x: "Q2",
//           y: 90
//         },
//         {
//           x: "Q3",
//           y: 100
//         },
//         {
//           x: "Q4",
//           y: 90
//         }
//       ]
//     },
//     {
//       y: 430,
//       quarters: [
//         {
//           x: "Q1",
//           y: 120
//         },
//         {
//           x: "Q2",
//           y: 110
//         },
//         {
//           x: "Q3",
//           y: 90
//         },
//         {
//           x: "Q4",
//           y: 110
//         }
//       ]
//     },
//     {
//       y: 448,
//       quarters: [
//         {
//           x: "Q1",
//           y: 70
//         },
//         {
//           x: "Q2",
//           y: 100
//         },
//         {
//           x: "Q3",
//           y: 140
//         },
//         {
//           x: "Q4",
//           y: 138
//         }
//       ]
//     },
//     {
//       y: 470,
//       quarters: [
//         {
//           x: "Q1",
//           y: 150
//         },
//         {
//           x: "Q2",
//           y: 60
//         },
//         {
//           x: "Q3",
//           y: 190
//         },
//         {
//           x: "Q4",
//           y: 70
//         }
//       ]
//     },
//     {
//       y: 540,
//       quarters: [
//         {
//           x: "Q1",
//           y: 120
//         },
//         {
//           x: "Q2",
//           y: 120
//         },
//         {
//           x: "Q3",
//           y: 130
//         },
//         {
//           x: "Q4",
//           y: 170
//         }
//       ]
//     },
//     {
//       y: 580,
//       quarters: [
//         {
//           x: "Q1",
//           y: 170
//         },
//         {
//           x: "Q2",
//           y: 130
//         },
//         {
//           x: "Q3",
//           y: 120
//         },
//         {
//           x: "Q4",
//           y: 160
//         }
//       ]
//     }];

//   const shuffleArray = (array) => {
//     for (var i = array.length - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));
//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//     return array;
//   }

//   const makeData = () => {
//     var dataSet = shuffleArray(arrayData);
//     const colors = [
//       "#008FFB",
//       "#00E396",
//       "#FEB019",
//       "#FF4560",
//       "#775DD0",
//       "#00D9E9",
//       "#FF66C3"
//     ]
//     var dataYearSeries = [
//       {
//         x: "2011",
//         y: dataSet[0].y,
//         color: colors[0],
//         quarters: dataSet[0].quarters
//       },
//       {
//         x: "2012",
//         y: dataSet[1].y,
//         color: colors[1],
//         quarters: dataSet[1].quarters
//       },
//       {
//         x: "2013",
//         y: dataSet[2].y,
//         color: colors[2],
//         quarters: dataSet[2].quarters
//       },
//       {
//         x: "2014",
//         y: dataSet[3].y,
//         color: colors[3],
//         quarters: dataSet[3].quarters
//       },
//       {
//         x: "2015",
//         y: dataSet[4].y,
//         color: colors[4],
//         quarters: dataSet[4].quarters
//       },
//       {
//         x: "2016",
//         y: dataSet[5].y,
//         color: colors[5],
//         quarters: dataSet[5].quarters
//       }
//     ];

//     return dataYearSeries;
//   }
//   const updateQuarterChart = (sourceChart, destChartIDToUpdate) => {
//     var series = [];
//     var seriesIndex = 0;
//     var colors = [];

//     if (sourceChart.w.globals.selectedDataPoints[0]) {
//       var selectedPoints = sourceChart.w.globals.selectedDataPoints;
//       for (var i = 0; i < selectedPoints[seriesIndex].length; i++) {
//         var selectedIndex = selectedPoints[seriesIndex][i];
//         var yearSeries = sourceChart.w.config.series[seriesIndex];
//         series.push({
//           name: yearSeries.data[selectedIndex].x,
//           data: yearSeries.data[selectedIndex].quarters
//         });
//         colors.push(yearSeries.data[selectedIndex].color);
//       }

//       if (series.length === 0)
//         series = [
//           {
//             data: []
//           }
//         ];

//       return window.ApexCharts.exec(destChartIDToUpdate, "updateOptions", {
//         series: series,
//         colors: colors,
//         fill: {
//           colors: colors
//         }
//       });
//     }
//   }
//   const series = [{
//     data: makeData()
//   }]
//   const options = {
//     chart: {
//       id: 'barYear',
//       height: 400,
//       width: '100%',
//       type: 'bar',
//       events: {
//         dataPointSelection: function (e, chart, opts) {
//           var quarterChartEl = document.querySelector("#chart-quarter");
//           var yearChartEl = document.querySelector("#chart-year");

//           if (opts.selectedDataPoints[0].length === 1) {
//             if (quarterChartEl.classList.contains("active")) {
//               updateQuarterChart(chart, 'barQuarter')
//             } else {
//               yearChartEl.classList.add("chart-quarter-activated")
//               quarterChartEl.classList.add("active");
//               updateQuarterChart(chart, 'barQuarter')
//             }
//           } else {
//             updateQuarterChart(chart, 'barQuarter')
//           }

//           if (opts.selectedDataPoints[0].length === 0) {
//             yearChartEl.classList.remove("chart-quarter-activated")
//             quarterChartEl.classList.remove("active");
//           }

//         },
//         updated: function (chart) {
//           updateQuarterChart(chart, 'barQuarter')
//         }
//       }
//     },
//     plotOptions: {
//       bar: {
//         distributed: true,
//         horizontal: true,
//         barHeight: '75%',
//         dataLabels: {
//           position: 'bottom'
//         }
//       }
//     },
//     dataLabels: {
//       enabled: true,
//       textAnchor: 'start',
//       style: {
//         colors: ['#fff']
//       },
//       formatter: function (val, opt) {
//         return opt.w.globals.labels[opt.dataPointIndex]
//       },
//       offsetX: 0,
//       dropShadow: {
//         enabled: true
//       }
//     },

//     colors: [
//       "#008FFB",
//       "#00E396",
//       "#FEB019",
//       "#FF4560",
//       "#775DD0",
//       "#00D9E9",
//       "#FF66C3"
//     ],

//     states: {
//       normal: {
//         filter: {
//           type: 'desaturate'
//         }
//       },
//       active: {
//         allowMultipleDataPointsSelection: true,
//         filter: {
//           type: 'darken',
//           value: 1
//         }
//       }
//     },
//     tooltip: {
//       x: {
//         show: false
//       },
//       y: {
//         title: {
//           formatter: function (val, opts) {
//             return opts.w.globals.labels[opts.dataPointIndex]
//           }
//         }
//       }
//     },
//     title: {
//       text: 'Yearly Results',
//       offsetX: 15
//     },
//     subtitle: {
//       text: '(Click on bar to see details)',
//       offsetX: 15
//     },
//     yaxis: {
//       labels: {
//         show: false
//       }
//     }
//   }

//   const seriesQuarter = [{
//     data: []
//   }]
//   const optionsQuarter = {
//     chart: {
//       id: 'barQuarter',
//       height: 400,
//       width: '100%',
//       type: 'bar',
//       stacked: true
//     },
//     plotOptions: {
//       bar: {
//         columnWidth: '50%',
//         horizontal: false
//       }
//     },
//     legend: {
//       show: false
//     },
//     grid: {
//       yaxis: {
//         lines: {
//           show: false,
//         }
//       },
//       xaxis: {
//         lines: {
//           show: true,
//         }
//       }
//     },
//     yaxis: {
//       labels: {
//         show: false
//       }
//     },
//     title: {
//       text: 'Quarterly Results',
//       offsetX: 10
//     },
//     tooltip: {
//       x: {
//         formatter: function (val, opts) {
//           return opts.w.globals.seriesNames[opts.seriesIndex]
//         }
//       },
//       y: {
//         title: {
//           formatter: function (val, opts) {
//             return opts.w.globals.labels[opts.dataPointIndex]
//           }
//         }
//       }
//     }
//   }






//   const changeData = () => {
//     ApexCharts.exec('barYear', 'updateSeries', [{
//       data: makeData()
//     }])
//   }

//   return (
//     <div className="col" style={{ display: 'flex', height: '90%' }}>
//       <div id="wrap">
//         <select id="model" class="flat-select"
//           onChange={() => changeData()}
//         >
//           <option value="iphone5">iPhone 5</option>
//           <option value="iphone6">iPhone 6</option>
//           <option value="iphone7">iPhone 7</option>
//         </select>
//         <div id="chart-year">
//           <ReactApexChart options={options} series={series} type="bar" height={400} />
//         </div>
//         <div id="chart-quarter">
//           <ReactApexChart options={optionsQuarter} series={seriesQuarter} type="bar" height={400} />
//         </div>
//       </div>
//     </div>
//   );
// }


// export default RegionRoadsDynamic;