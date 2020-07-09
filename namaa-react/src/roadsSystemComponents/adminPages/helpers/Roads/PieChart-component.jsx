import React  from 'react';
import ReactApexChart from 'react-apexcharts';


const  PieChart =(props)=> {
  const {roadInPriority} =props;
  const costPreservation = (roadInPriority.filter(road=>road.typeOfTreatment==='Preservation'))

  const totalcostPreservation = costPreservation.reduce((all,item,index)=>{
    all+=item.costMaintenanceInMillion;
    return all
  },0)
 

  const costResurface = (roadInPriority.filter(road=>road.typeOfTreatment==='Resurface'))
  const totalcostResurface = costResurface.reduce((all,item,index)=>{
    all+=item.costMaintenanceInMillion;
    return all
  },0)
 

  const costMajorRehabilitation = (roadInPriority.filter(road=>road.typeOfTreatment==='Major Rehabilitation'))

  const totalCostMajorRehabilitation = costMajorRehabilitation.reduce((all,item,index)=>{
    all+=item.costMaintenanceInMillion;
    return all
  },0)
 
 

  const costReconstruction = (roadInPriority.filter(road=>road.typeOfTreatment==='Reconstruction'))
  const totalcostReconstruction = costReconstruction.reduce((all,item,index)=>{
    all+=item.costMaintenanceInMillion;
    return all
  },0)
 
  

  
  console.log(costPreservation)
          const series= [totalcostPreservation , totalcostResurface,totalCostMajorRehabilitation , totalcostReconstruction]
          const options= {
              chart: {
                width: '100%',
                type: 'pie',
              },
              labels: ["Preservation", "Resurface", "Major Rehabilitation", "Reconstruction"],
              theme: {
                monochrome: {
                  enabled: true
                }
              },
              plotOptions: {
                pie: {
                  dataLabels: {
                    offset: -5
                  }
                }
              },
              title: {
                text: "Cost of Maintenance"
              },
              dataLabels: {
                formatter(val, opts) {
                  const name = opts.w.globals.labels[opts.seriesIndex]
                //   const value = opts.w.config.series[opts.seriesIndex]
                //   console.log(opts)
                  return [name , val.toFixed(1)+ '%']
                }
              },
              legend: {
                show: false
              },
        
          
   responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          }
   
        return (
          
            <div className="col" style={{display:'flex',height:'90%'}}>
            <ReactApexChart options={options} series={series} type="pie" height='290' />
            </div>
             
        )
    }


export default PieChart;


  // constructor(props) {
    //     super(props);

    //     this.state = {
        
    //       series: [44, 55, 13, 43, 22],
    //       options: {
    //         chart: {
    //           width: 380,
    //           type: 'pie',
    //         },
    //         labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    //         responsive: [{
    //           breakpoint: 480,
    //           options: {
    //             chart: {
    //               width: 200
    //             },
    //             legend: {
    //               position: 'bottom'
    //             }
    //           }
    //         }]
    //       },
        
        
    //     };
    //   }