import React from 'react';
import ReactApexChart from 'react-apexcharts';

const HrBarChart =(props)=> {
  const {regionsInPriority,handleClickOnHrChartInRegions} = props;
  // const [veryPoorRegions, setveryPoorRegions] = useState(0)
  // useEffect(()=>{

const veryPoorRegions= (regionsInPriority.filter(region=>region.pavmentcondition==="Very Poor")).length
const poorRegions = (regionsInPriority.filter(Region=>Region.pavmentcondition==="Poor")).length
const fairRegions = (regionsInPriority.filter(Region=>Region.pavmentcondition==="Fair")).length
const goodRegions = (regionsInPriority.filter(Region=>Region.pavmentcondition==="Good")).length
const excellentRegions = (regionsInPriority.filter(Region=>Region.pavmentcondition==="Excellent")).length
  
    const   series= [{
        data: [veryPoorRegions, poorRegions, fairRegions, goodRegions, excellentRegions]
        
      }]
     const  options= {
        chart: {
          type: 'bar',
          events:{
            click: function(event, chartContext, config){
            const index= config.dataPointIndex
              const nameOfClassification=config.globals.labels[index]
              handleClickOnHrChartInRegions(nameOfClassification)
            }
          }
          
        },
        plotOptions: {
          bar: {
            barHeight: '100%',
              columnWidth: '100%',
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: 'bottom'
            },
          }
        },
        colors: ['#dc3545','#ffc107','#6c757d','#007bff','#28a745'
        ],
        legend: {
          show: true,  
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial',
          fontWeight: 400,
          labels: {
            colors: '#ffffff',
            // useSeriesColors: false
        },
        },
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {      //style of text inside bars
            colors: ['#fff']
          },
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: ['Very Poor','Poor','Fair','Good','Excellent'
          ],
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        title: {
            text: 'For Regions',
            align: 'center',
            floating: true,
            style: {
              fontSize: '12px',
              color:'#FFFFFF'
                    }
        },
       
        tooltip: {
          theme: 'dark',
          x: {
            show: true,
            colors:'#FFFF00'
          },
          y: {
            title: {
              formatter: function () {
                return ''
              }
            }
          }
        }
      }
    
    
  


    return (

      // <div className="row" style={{ justifyContent: 'center', marginTop: '3rem' }}>

        // <div id="HrBarChart2" style={{ height: '45hw', width: '45vw', display: 'flex', justifyContent: 'center' }}>
            <div className="col" style={{display:'flex',height:'90%'}}>
          <ReactApexChart options={options} series={series} type="bar" height='290' />
          
         </div>
      // </div>

    )
  }


export default HrBarChart;















// state = {

  //   series: [{
  //     name: 'Inflation',
  //     data: [2.3, 3.1, 4.0, 10.1]
  //   }],
  //   options: {
  //     chart: {
  //       width: "100%",
  //       height: 390,
  //       type: "bar"
  //     },
  //     plotOptions: {
  //       bar: {
  //         horizontal: true
  //       }
  //     },
  //     dataLabels: {
  //       enabled: true
  //     },
  //     stroke: {
  //       width: 1,
  //       colors: ["#fff"]
  //     },
  //     xaxis: {
  //       categories: ["Jan", "Feb", "Mar", "Apr"],
  //       position: 'left',
  //       axisBorder: {
  //         show: false
  //       },
  //       axisTicks: {
  //         show: false
  //       },
  //       crosshairs: {
  //         fill: {
  //           type: 'gradient',
  //           gradient: {
  //             colorFrom: '#D8E3F0',
  //             colorTo: '#BED1E6',
  //             stops: [0, 100],
  //             opacityFrom: 0.4,
  //             opacityTo: 0.5,
  //           }
  //         }
  //       },
  //       tooltip: {
  //         enabled: true,
  //       }
  //     },
  //     yaxis: {
      
  //       axisBorder: {
  //         show: true
  //       },
  //       axisTicks: {
  //         show: true,
  //       },
  //       labels: {
  //         show: true,
  //         formatter: function (val) {
  //           return val + "";
  //         }
  //       }

  //     },
  //     title: {
  //       text: 'Monthly Inflation in Argentina, 2002',
  //       floating: true,
  //       offsetY: 330,
  //       align: 'center',
  //       style: {
  //         color: '#444'
  //       }
  //     },
  //     responsive: [
  //       {
  //         breakpoint: 1000,
  //         options: {
  //           plotOptions: {
  //             bar: {
  //               horizontal: false
  //             }
  //           },
  //           legend: {
  //             position: "bottom"
  //           }
  //         }
  //       }
  //     ]
  //   },


  // };