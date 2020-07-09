import React, { Component } from 'react';
import ReactApexChart  from 'react-apexcharts';

class StackedChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'PRODUCT A',
                data: [44, 55, 41, 67, 22, 43, 21, 49]
            }, {
                name: 'PRODUCT B',
                data: [13, 23, 20, 8, 13, 27, 33, 12]
            }, {
                name: 'PRODUCT C',
                data: [11, 17, 15, 15, 21, 14, 15, 13]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                    stackType: '100%'
                },
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
                xaxis: {
                    categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2',
                        '2012 Q3', '2012 Q4'
                    ],
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'right',
                    offsetX: 0,
                    offsetY: 50
                },
            },


        };
    }



    render() {
        return (

            <div className="row" style={{ justifyContent: 'center',marginTop:'3rem' }}>
                <div id="StackedChart1">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={450} width={800}/>
                </div>
            </div>
        );
    }
}

export default StackedChart;
