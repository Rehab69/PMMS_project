import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts'

const  RoadsRegionsCostMaintenance =(props)=> {

  const {roadInPriority,regionsInPriority} =props;
  const roadInMaintenance = roadInPriority.filter(road=>road.costMaintenanceInMillion)
  const regionsInMaintenance = regionsInPriority.filter(region=>region.costMaintenanceInMillion)
//cost of reconstruction for roads
  const roadReconstruction = roadInMaintenance.filter(road=>road.typeOfTreatment==="Reconstruction")
  const roadReconstructionCosts = roadReconstruction.map(road=> {return road.costMaintenanceInMillion})
    const totalCostroadReconstruction = roadReconstructionCosts.reduce((all,item,index)=>{
    all+=item;
    return all
  },0)
  
//cost of Resurface for roads
  const roadResurface = roadInMaintenance.filter(road=>road.typeOfTreatment==="Resurface")
  const roadResurfaceCosts = roadResurface.map(road=> {return road.costMaintenanceInMillion})
  const totalCostroadResurface = roadResurfaceCosts.reduce((all,item,index)=>{
  all+=item;
  return all
},0)

//cost of Rehabilitation for roads
  const roadRehabilitation = roadInMaintenance.filter(road=>road.typeOfTreatment==="Major Rehabilitation")
  const roadRehabilitationCosts = roadRehabilitation.map(road=> {return road.costMaintenanceInMillion})
  const totalCostroadRehabilitation = roadRehabilitationCosts.reduce((all,item,index)=>{
  all+=item;
  return all
},0)

//cost of Preservation for roads
  const roadPreservation = roadInMaintenance.filter(road=>road.typeOfTreatment==="Preservation")
  const roadPreservationCosts = roadPreservation.map(road=> {return road.costMaintenanceInMillion})
  const totalCostroadPreservation = roadPreservationCosts.reduce((all,item,index)=>{
  all+=item;
  return all
},0)

    
//cost of reconstruction for regions
const regionReconstruction = regionsInMaintenance.filter(region=>region.typeOfTreatment==="Reconstruction")
const regionReconstructionCosts = regionReconstruction.map(region=> {return region.costMaintenanceInMillion})
  const totalCostregionReconstruction = regionReconstructionCosts.reduce((all,item,index)=>{
  all+=item;
  return all
},0)

//cost of Resurface for regions
const regionResurface = regionsInMaintenance.filter(region=>region.typeOfTreatment==="Resurface")
const regionResurfaceCosts = regionResurface.map(region=> {return region.costMaintenanceInMillion})
const totalCostregionResurface = regionResurfaceCosts.reduce((all,item,index)=>{
all+=item;
return all
},0)

//cost of Rehabilitation for regions
const regionRehabilitation = regionsInMaintenance.filter(region=>region.typeOfTreatment==="Major Rehabilitation")
const regionRehabilitationCosts = regionRehabilitation.map(region=> {return region.costMaintenanceInMillion})
const totalCostregionRehabilitation = regionRehabilitationCosts.reduce((all,item,index)=>{
all+=item;
return all
},0)

//cost of Preservation for regions
const regionPreservation = regionsInMaintenance.filter(region=>region.typeOfTreatment==="Preservation")
const regionPreservationCosts = regionPreservation.map(region=> {return region.costMaintenanceInMillion})
const totalCostregionPreservation = regionPreservationCosts.reduce((all,item,index)=>{
all+=item;
return all
},0)
      
         const  series= [{
            name: 'Major Roads',
            data: [totalCostroadReconstruction, totalCostroadResurface, totalCostroadRehabilitation,totalCostroadPreservation]
          }, {
            name: 'Regions',
            data: [totalCostregionReconstruction, totalCostregionResurface, totalCostregionRehabilitation,totalCostregionPreservation]
          }]
          const  options= {
            chart: {
              type: 'bar',
              height: 350
            },
            legend: {
             
            position:"top",
            offsetX: 20,
            offsetY: 20,
              labels:{
                colors:["#ffffff"]
              }
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Reconstruction','Resurface','Rehabilation','Preservation'],
              title: {
                text: "( Types of Maintenance )",
                offsetX: 0,
                offsetY: -10,
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
                show:true,
                style:{
                 colors:["#ffffff","#ffffff","#ffffff","#ffffff"],
                  fontSize:'10px',
                  fontWeight:400,
                  cssClass: 'apexcharts-xaxis-label',
                }
              }
            },
            yaxis: {
                show: true,
                showAlways: true,
                labels: {
                  show:true,
                  style:{
                   colors:"#ffffff",
                    fontSize:'12px',
                    fontWeight:400,
                    cssClass: 'apexcharts-xaxis-label',
                  }
                  
                },
              title: {
                text: '(Cost in Million ) LE ',
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
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return  val + " Million LE"
                }
              }
            }
          }
        
        

    

        return (
          

            <div className="col" style={{display:'flex',height:'90%',justifyContent:'center',flexDirection:'column'}}>


    <div style={{position:'relative'}}>
<ReactApexChart options={options} series={series} type="bar" height="320" />
<span className="mr-2" style={{ color: 'white',fontSize:'1.2rem' }}>
                          <i className="fas fa-square text-primary" /> This Year (2020)
                           </span>
</div>
  </div>

        );
      }
    
 
export default RoadsRegionsCostMaintenance;