import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ColumnChart =(props)=> {
const {roadAfterCalcUDI,handleClickOnColChartInRoads } = props;
const roadNames = roadAfterCalcUDI.map(road=>{return road.roadName})
    const roadGI = roadAfterCalcUDI.map(road=>{return road.udi})
      console.log(roadNames)
       const series= [{
          data:roadGI,
          name:'GI'
        }]
        const options= {
          chart: {
            type: 'bar',
            events:{
              click: function(event, chartContext, config){
              const index= config.dataPointIndex
                const nameOfRoad=config.globals.labels[index]
                handleClickOnColChartInRoads(nameOfRoad)
              }
            }
            
            
          
          },
          plotOptions: {
            bar: {
              horizontal: false,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: roadNames,
            labels: {
              show: true,
              rotate: 45,
              style: {
                colors: '#ffffff',
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
            
            }
          },
          yaxis: {
            labels: {
              show: true,
              rotate: -45,
              style: {
                colors: '#ffffff',
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
            },
            title: {
                        text: 'GI Values',
                        style: {
                          color: '#ffffff',
                          fontSize: '14px',
                          fontFamily: 'Helvetica, Arial, sans-serif',
                          fontWeight: 600,
                          cssClass: 'apexcharts-yaxis-title',
                      },
                      }
          },
          
        }
      
      
   
        return (
            // <div className="row" style={{justifyContent:'center',marginTop:'3rem'}}>
            <div id="Columnchart1">
                <ReactApexChart options={options} series={series} type="bar" height="150" />
            </div>
            // </div>
        );
    }

export default ColumnChart;



    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         series: [{
    //             name: 'Maintainence Cost',
    //             data: [50,30,20]
    //         }],
    //         options: {
    //             chart: {
    //                 height: 350,
    //                 type: 'bar',
    //             },
    //             plotOptions: {
    //                 bar: {
    //                     dataLabels: {
    //                         position: 'center', // top, center, bottom
    //                         colors:["#555"]
    //                     },
    //                 }
    //             },
    //             dataLabels: {
    //                 enabled: true,
    //                 formatter: function (val) {
    //                     return val + "M";
    //                 },
    //                 offsetY: -20,
    //                 style: {
    //                     fontSize: '12px',
    //                     colors: ["#304758"]
    //                 }
    //             },
    //             xaxis: {
    //                 categories: ["Road1", "Road2","Road3"],
    //                 position: 'bottom',
    //                 axisBorder: {
    //                     show: false
    //                 },
    //                 axisTicks: {
    //                     show: false
    //                 },
    //                 crosshairs: {
    //                     fill: {
    //                         type: 'gradient',
    //                         gradient: {
    //                             colorFrom: '#D8E3F0',
    //                             colorTo: '#BED1E6',
    //                             stops: [0, 100],
    //                             opacityFrom: 0.4,
    //                             opacityTo: 0.5,
    //                         }
    //                     }
    //                 },
    //                 tooltip: {
    //                     enabled: true,
    //                 }
    //             },
    //             yaxis: {
    //                 axisBorder: {
    //                     show: false
    //                 },
    //                 axisTicks: {
    //                     show: false,
    //                 },
    //                 labels: {
    //                     show: false,
    //                     formatter: function (val) {
    //                         return val + "M";
    //                     }
    //                 }
    //             },
    //             title: {
    //                 text: 'Monthly Inflation in Argentina, 2002',
    //                 floating: true,
    //                 offsetY: 330,
    //                 align: 'center',
    //                 style: {
    //                     color: '#444'
    //                 }
    //             }
    //         },
    //     };
    // }
    // constructor(props) {
    //   super(props);

    //   this.state = {
      
    //     series: [{
    //       data: [21, 22, 10, 28, 16, 21, 13, 30],
    //       name:'GI'
    //     }],
    //     options: {
    //       chart: {
    //         height: 250,
    //         type: 'bar',
    //         events: {
    //           click: function(chart, w, e) {
    //             console.log(chart, w, e)
    //           }
    //         }
    //       },
    //       colors: ['#59D396','#D39A59','#978A7D','#46ABC9','#BB46C9','#C9467A','#F93900','#C1AEA8'],
    //       plotOptions: {
    //         bar: {
    //           columnWidth: '10%',
    //           barHeight: '10%',
    //           distributed: true,
    //           horizontal:false
    //         }
    //       },
    //       dataLabels: {
    //         enabled: false
    //       },
    //       legend: {
    //         show: false
    //       },
    //       xaxis: {
    //         categories: [
    //           ['John', 'Doe'],
    //           ['Joe', 'Smith'],
    //           ['Jake', 'Williams'],
    //           'Amber',
    //           ['Peter', 'Brown'],
    //           ['Mary', 'Evans'],
    //           ['David', 'Wilson'],
    //           ['Lily', 'Roberts'], 
    //         ],
        
    //         labels: {
    //           style: {
    //             colors: '#FFFFFF',
    //             fontSize: '8px',
    //               rotate: 90
    //           }
    //         },
    //         axisBorder: {
    //           show: false
    //         },
    //         axisTicks: {
    //           show: true,
    //         },
    //         show:true,
    //         title: {
    //           text: 'Major Roads',
    //           style: {
    //             color: '#78909C',
    //             fontSize: '14px',
    //             fontFamily: 'Helvetica, Arial, sans-serif',
    //             fontWeight: 600,
    //             cssClass: 'apexcharts-yaxis-title',
    //         },
    //         },
    //       },
    //       yaxis:{
    //         labels:{
    //           show:true,
    //           formatter: (value) => { return value }
    //         },
    //         axisBorder: {
    //           show: true
    //         },
    //         axisTicks: {
    //           show: true,
    //         },
    //         show:true,
    //         title: {
    //           text: 'GI Values',
    //           style: {
    //             color: '#78909C',
    //             fontSize: '14px',
    //             fontFamily: 'Helvetica, Arial, sans-serif',
    //             fontWeight: 600,
    //             cssClass: 'apexcharts-yaxis-title',
    //         },
    //         }
    //       }
    //     },
      
      
    //   };
    // }