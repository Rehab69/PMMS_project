import React from 'react';

const SmallCard = (props) => {
  const { roadAfterCalcUDI,urlRoads, roadInPriority,urlRegion,urlStreets,streets,regionsAfterCalcUDI,regionsInPriority} = props;
  const roadInMaintenance = roadInPriority.filter(road=>road.costMaintenanceInMillion)
  const regionInMaintenance = regionsInPriority.filter(road=>road.costMaintenanceInMillion)
  const costsRoads = roadInMaintenance.map(road=>{return road.costMaintenanceInMillion})
  const totalCostRoads = costsRoads.reduce((all,item,index)=>{
    all+=item;
    return all
  },0)

  const costsRegions = regionInMaintenance.map(region=>{return region.costMaintenanceInMillion})
  const totalCostRegions = costsRegions.reduce((all,item,index)=>{
    all+=item;
    return all
  },0)
const totalCost = totalCostRoads+totalCostRegions;
    return ( 
   <>
        <div className="col" style={{margin:'2% 0'}}>

        
        <div className="row" style={{margin: '2% 0'}}>
        <div className="col-md" style={{padding:'0', paddingRight:'1rem'}} >
          <div className="card-counter" style={{backgroundColor:'rgb(50, 59, 70)',color:'white',margin:'0',padding:'0'}}>
            {/* <i className="fa fa-code-fork iconInSmallCards"></i> */}
    <span className="count-numbers" style={{marginBottom:'1vw'}}>{roadAfterCalcUDI.length + regionsAfterCalcUDI.length}</span>
            <span className="count-name smallcard"style={{color:'white',fontSize:'1.2em'}} >Total No. of Assets</span>
          </div>
        </div>
        <div className="col-md"  style={{padding:'0 1rem'}}>
          <div className="card-counter " style={{backgroundColor:'rgb(50, 59, 70)',color:'white',margin:'0',padding:'0'}}>
            {/* <i className="fa fa-ticket iconInSmallCards"></i> */}
    <span className="count-numbers" style={{marginBottom:'1vw'}}>{totalCost} M</span>
            <span className="count-name smallcard" style={{color:'white',fontSize:'1.2em'}}>Total Cost of Maintenance</span>
          </div>
        </div>
        <div className="col-md" style={{padding:'0 1rem'}}>
          <div className="card-counter" style={{backgroundColor:'rgb(50, 59, 70)' ,color:'white',margin:'0',padding:'0'}}>
            {/* <i className="fa fa-database"></i> */}
            <span className="count-numbers" style={{marginBottom:'1vw'}}>20</span>
            <span className="count-name smallcard" style={{color:'white',fontSize:'1.2em'}}>Total No. of Surveying Equipment</span>
          </div>
        </div>
        <div className="col-md" style={{padding:'0 1rem'}}>
          <div className="card-counter" style={{backgroundColor:'rgb(50, 59, 70)' ,color:'white',margin:'0',padding:'0'}}>
          {/* <i className="fa fa-database"></i> */}
            <span className="count-numbers" style={{marginBottom:'1vw'}}>{120}</span>
            <span className="count-name smallcard" style={{color:'white',fontSize:'1.2em'}}>Total No. of Surveyors</span>
          </div>
          
        </div>
       
      </div>


      <div className="row" style={{margin: '2% 0'}}>
        <div className="col-md" style={{padding:'0', paddingRight:'1rem'}} >
          <div className="card-counter" style={{backgroundColor:'rgb(50, 59, 70)',color:'white',margin:'0',padding:'0'}}>
            {/* <i className="fa fa-code-fork iconInSmallCards"></i> */}
    <span className="count-numbers" style={{marginBottom:'1vw'}}>{roadAfterCalcUDI.length}</span>
            <span className="count-name smallcard"style={{color:'white',fontSize:'1.2em'}} >Total No. of Major Roads</span>
          </div>
        </div>
        <div className="col-md"  style={{padding:'0 1rem'}}>
          <div className="card-counter " style={{backgroundColor:'rgb(50, 59, 70)',color:'white',margin:'0',padding:'0'}}>
            {/* <i className="fa fa-ticket iconInSmallCards"></i> */}
    <span className="count-numbers" style={{marginBottom:'1vw'}}>{ roadInMaintenance.length}</span>
            <span className="count-name smallcard" style={{color:'white',fontSize:'1.2em'}}>No. of Roads in Maintenance</span>
          </div>
        </div>
        <div className="col-md" style={{padding:'0 1rem'}}>
          <div className="card-counter" style={{backgroundColor:'rgb(50, 59, 70)' ,color:'white',margin:'0',padding:'0'}}>
            {/* <i className="fa fa-database"></i> */}
            <span className="count-numbers" style={{marginBottom:'1vw'}}>{regionsAfterCalcUDI.length}</span>
            <span className="count-name smallcard" style={{color:'white',fontSize:'1.2em'}}>Total No. of Regions</span>
          </div>
        </div>
        <div className="col-md" style={{padding:'0 1rem'}}>
          <div className="card-counter" style={{backgroundColor:'rgb(50, 59, 70)' ,color:'white',margin:'0',padding:'0'}}>
            {/* <i className="fa fa-database"></i> */}
            <span className="count-numbers" style={{marginBottom:'1vw'}}>{streets.length}</span>
            <span className="count-name smallcard" style={{color:'white',fontSize:'1.2em'}}>Total No. of Streets of Regions</span>
          </div>
        </div>
        <div className="col-md" style={{padding:'0 1rem'}}>
          <div className="card-counter" style={{backgroundColor:'rgb(50, 59, 70)' ,color:'white',margin:'0',padding:'0'}}>
          {/* <i className="fa fa-database"></i> */}
            <span className="count-numbers" style={{marginBottom:'1vw'}}>{regionInMaintenance.length}</span>
            <span className="count-name smallcard" style={{color:'white',fontSize:'1.2em'}}>No. of Regions in Maintenance</span>
          </div>
          
        </div>
       
      </div>

      </div>
      </>
      
     );
}
 
export default SmallCard;