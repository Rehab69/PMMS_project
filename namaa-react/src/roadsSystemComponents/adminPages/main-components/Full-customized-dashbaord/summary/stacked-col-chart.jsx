import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts'

const PCSummary = (props) => {
const {roadAfterCalcUDI,regionsAfterCalcUDI} = props;
const verypoorRoad = (roadAfterCalcUDI.filter(road=>road.pavmentcondition==="Very Poor")).length
const poorRoad = (roadAfterCalcUDI.filter(road=>road.pavmentcondition==="Poor")).length
const fairRoad = (roadAfterCalcUDI.filter(road=>road.pavmentcondition==="Fair")).length
const goodRoad = (roadAfterCalcUDI.filter(road=>road.pavmentcondition==="Good")).length
const excellentRoad = (roadAfterCalcUDI.filter(road=>road.pavmentcondition==="Excellent")).length

const verypoorRegion = (regionsAfterCalcUDI.filter(region=>region.pavmentcondition==="Very Poor")).length
const poorRegion = (regionsAfterCalcUDI.filter(region=>region.pavmentcondition==="Poor")).length
const fairRegion = (regionsAfterCalcUDI.filter(region=>region.pavmentcondition==="Fair")).length
const goodRegion = (regionsAfterCalcUDI.filter(region=>region.pavmentcondition==="Good")).length
const excellentRegion = (regionsAfterCalcUDI.filter(region=>region.pavmentcondition==="Excellent")).length
  const series = [{
    name: 'Very Poor',
    data: [verypoorRoad, verypoorRegion]
  }, {
    name: 'Poor',
    data: [poorRoad, poorRegion]
  }, {
    name: 'Fair',
    data: [fairRoad, fairRegion]
  }, {
    name: 'Good',
    data: [goodRoad, goodRegion]
  }, {
    name: 'Excellent',
    data: [excellentRoad, excellentRegion]
  }
  ]
  const options = {
    chart: {
      type: 'bar',
      height: 290,
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    colors: ['#F4190F', '#F9A512', '#A19B8F', '#1588BD', '#43EC21'],
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: ['Major Roads', 'Regions'],
      title: {
        text: "( Assets )",
        offsetX: 0,
        offsetY: 5,
        style: {
          color: "#ffffff",
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 600,
          cssClass: 'apexcharts-xaxis-title',
        },
      },
      tickPlacement: 'between',
      labels: {
        show: true,
        style: {
          colors: ["#ffffff", "#ffffff"],
          fontSize: '12px',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        }
      }
    },
    yaxis: {
      show: true,
      showAlways: true,
      labels: {
        show: true,
        style: {
          colors: "#ffffff",
          fontSize: '12px',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        }
      },
      title: {
        text: '(No. Asset per Pavement Condition)',
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

      axisBorder: {
        show: true,
        color: '#78909C',
        offsetX: 0,
        offsetY: 0
      },

    },
    legend: {
      position: 'right',
      offsetY: 40,
      labels: {
        colors: ["#ffffff"]
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val, e) {
          // console.log(val, e)
          return val
        }
      }
    }
  }




  return (
    <div className="col" style={{display:'flex',height:'90%'}}>


    <div style={{position:'relative'}}>
        <ReactApexChart options={options} series={series} type="bar" height='300' width="100%" />
        <span className="mr-2" style={{ color: 'white',fontSize:'1.2rem' }}>
                          <i className="fas fa-square text-primary" /> This Year (2020)
                           </span>
</div>
  </div>

  );

}

export default PCSummary;
