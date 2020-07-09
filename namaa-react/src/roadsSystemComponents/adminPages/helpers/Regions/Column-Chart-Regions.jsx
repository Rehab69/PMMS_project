import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ColumnChart =(props)=> {
const {regionsInPriority,handleClickOnColChartInRegions } = props;
const regionNames = regionsInPriority.map(region=>{return region.RegionName})
    const regionGI = regionsInPriority.map(region=>{return region.udi})
      
       const series= [{
          data:regionGI,
          name:'GI'
        }]
        const options= {
          chart: {
            type: 'bar',
                events:{
              click: function(event, chartContext, config){
              const index= config.dataPointIndex
                const nameOfRegion=config.globals.labels[index]
                handleClickOnColChartInRegions(nameOfRegion)
              }
            }
          
          },
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: regionNames,
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
            <div id="Columnchart1">
                <ReactApexChart options={options} series={series} type="bar" height="150" />
            </div>
        );
    }

export default ColumnChart;

