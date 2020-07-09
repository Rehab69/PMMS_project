import React from 'react';
import ReactApexChart from 'react-apexcharts';

 const TimeLineChart =(props)=> {
       const {roadInPriority,regionsInPriority} =props;
          
            const series1= [
              {
                name: 'Road1',
                data: [
                  {
                    x: 'Maintenance Duration',
                    y: [
                      new Date('2020-07-05').getTime(),
                      new Date('2022-07-08').getTime()
                    ]
                  }
                ]
              },
              {
                name: 'Road2',
                data: [
                  {
                    x: 'Maintenance Duration',
                    y: [
                      new Date('2020-07-02').getTime(),
                      new Date('2021-03-05').getTime()
                    ]
                  }
                ]
              }
            ]
            const series2= [
              {
                name: 'Region1',
                data: [
                  {
                    x: 'Maintenance Duration',
                    y: [
                      new Date('2020-07-05').getTime(),
                      new Date('2022-07-08').getTime()
                    ]
                  }
                ]
              },
              {
                name: 'Region2',
                data: [
                  {
                    x: 'Maintenance Duration',
                    y: [
                      new Date('2020-07-02').getTime(),
                      new Date('2021-03-05').getTime()
                    ]
                  }
                ]
              },    {
                name: 'Region3',
                data: [
                  {
                    x: 'Maintenance Duration',
                    y: [
                      new Date('2020-12-05').getTime(),
                      new Date('2023-02-08').getTime()
                    ]
                  }
                ]
              }
            ]
            const options1= {
              chart: {
                height: 350,
                type: 'rangeBar'
              },
              plotOptions: {
                bar: {
                  horizontal: true
                }
              },
             
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'light',
                  type: 'vertical',
                  shadeIntensity: 0.25,
                  gradientToColors: undefined,
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [50, 0, 100, 100]
                }
              },
              xaxis: {
                type: 'datetime',
                min: new Date('2020-06-01').getTime(),
                tickAmount: 6,
                labels: {
                  show:true,
                  style:{
                    colors:"#ffffff",
                    fontSize:'10px',
                    fontWeight:400,
                    cssClass: 'apexcharts-xaxis-label',
                  }
                }
              },
              yaxis:{
                title: {
                text: '( Major Roads )',
                rotate: 90,
                offsetX: 0,
                offsetY: 0,
                style: {
                    color: "#ffffff",
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-title',
                },
              },
              labels:{
                show:false
              }
              },
              legend: {
                position: 'top',
                labels:{
                  colors:["#ffffff"]
                }
              }
            }

            const options2= {
              chart: {
                height: 350,
                type: 'rangeBar'
              },
              plotOptions: {
                bar: {
                  horizontal: true
                }
              },
             
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'light',
                  type: 'vertical',
                  shadeIntensity: 0.25,
                  gradientToColors: undefined,
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [50, 0, 100, 100]
                }
              },
              xaxis: {
                type: 'datetime',
                min: new Date('2020-06-01').getTime(),
                tickAmount: 6,
                labels: {
                  show:true,
                  style:{
                    colors:"#ffffff",
                    fontSize:'10px',
                    fontWeight:400,
                    cssClass: 'apexcharts-xaxis-label',
                  }
                }
              },
              yaxis:{
                title: {
                text: '( Regions )',
                rotate: 90,
                offsetX: 0,
                offsetY: 0,
                style: {
                    color: "#ffffff",
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-title',
                },
              },
              labels:{
                show:false
              }
              },
              legend: {
                position: 'top',
                labels:{
                  colors:["#ffffff"]
                }
              }
            }
          //   title: {
          //     text: "Maintenance Duration for Assets",
          //     align: 'top',
          //     margin: 10,
          //     offsetX: 0,
          //     offsetY: 0,
          //     floating: true,
          //     style: {
          //       fontSize:  '14px',
          //       fontWeight:  'bold',
          //       fontFamily:  'Helvetica, Arial, sans-serif',
          //       color:  '#263238'
          //     },
          // }
        
      

    
          return (
            <>

      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',height:'90%'}}>

<div style={{marginRight:'5vw'}}>

  <ReactApexChart options={options1} series={series1} type="rangeBar" height='200' width='400' />
  </div>

 <div style={{marginLeft:'5vw'}}>
  <ReactApexChart options={options2} series={series2} type="rangeBar" height='200' width='400' />
</div>

</div>
<span className="mr-2" style={{ color: 'white' ,marginLeft:'2vh'}}>
                          <i className="fas fa-square text-primary" /> This Year (2020)
                           </span>
</>
          );
        }
      
export default TimeLineChart; 