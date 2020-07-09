import React,{ Component } from 'react';
import ReactApexChart from 'react-apexcharts';


class CircleChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [15, 15,40, 15, 15],
            options: {
                chart: {
                    height: 250,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 2,
                            size: '30%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: false,
                            }
                        }
                    }
                },
                colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
                labels: ['Excellent','No. Good', 'No. Fair', 'No. Poor', 'No. Very Poor'],
                legend: {
                    onItemClick: {
                        toggleDataSeries: false
                      },
                    show: true,
                    floating: true,
                    fontSize: '10rem',
                    position: 'left',
                    offsetX: -30,
                    offsetY: -15,
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 0
                    },
                    formatter: function (seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                    },
                    itemMargin: {
                        vertical: 3
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        
                chart: {
                    height: 250,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 2,
                            size: '30%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: false,
                            }
                        }
                    },
               
               
                legend: {
                    onItemClick: {
                        toggleDataSeries: false
                      },
                    show: false,
                  
         },

}
        
    }}]}}}



    render() {
        return (

            <div className="col" style={{display:'flex',height:'90%'}}>
            
                        {/* <div id="Circlechart2" style={{height:"390hv"}}> */}
                            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar"  />
                        {/* </div> */}
                 
            </div>


        )
    }
}

export default CircleChart;