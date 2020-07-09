import React from 'react';

const SmallCard = (props) => {
  const {regionsAfterCalcUDI ,regionsInPriority} = props;
  const regionInMaintenance = regionsInPriority.filter(region=>region.costMaintenanceInMillion)
  const costs = regionInMaintenance.map(region=>{return region.costMaintenanceInMillion})
  const totalCost = costs.reduce((all,item,index)=>{
    all+=item;
    return all
  },0)

    return ( 
   <>

        <div className="row" style={{margin: '2% 0'}}>
        <div className="col-md" style={{padding:'0', paddingRight:'1rem'}} >
          <div className="card-counter" style={{backgroundColor:'rgb(50, 59, 70)',color:'white',margin:'0',padding:'0'}}>
            {/* <i className="fa fa-code-fork iconInSmallCards"></i> */}
    <span className="count-numbers" style={{marginBottom:'1vw'}}>{regionsAfterCalcUDI.length + 4}</span>
            <span className="count-name smallcard"style={{color:'white',fontSize:'1.2em'}} >Total No. regions</span>
          </div>
        </div>
        <div className="col-md"  style={{padding:'0 1rem'}}>
          <div className="card-counter " style={{backgroundColor:'rgb(50, 59, 70)',color:'white',margin:'0',padding:'0'}}>
            {/* <i className="fa fa-ticket iconInSmallCards"></i> */}
    <span className="count-numbers" style={{marginBottom:'1vw'}}>{ regionsAfterCalcUDI.length }</span>
            <span className="count-name smallcard" style={{color:'white',fontSize:'1.2em'}}>No. of surveying regions</span>
          </div>
        </div>
        <div className="col-md" style={{padding:'0 1rem'}}>
          <div className="card-counter" style={{backgroundColor:'rgb(50, 59, 70)' ,color:'white',margin:'0',padding:'0'}}>
            {/* <i className="fa fa-database"></i> */}
            <span className="count-numbers" style={{marginBottom:'1vw'}}>{regionInMaintenance.length}</span>
            <span className="count-name smallcard" style={{color:'white',fontSize:'1.2em'}}>Regions in Maintenance Plan</span>
          </div>
        </div>
        <div className="col-md" style={{padding:'0 1rem'}}>
          <div className="card-counter" style={{backgroundColor:'rgb(50, 59, 70)' ,color:'white',margin:'0',padding:'0'}}>
          {/* <i className="fa fa-database"></i> */}
            <span className="count-numbers" style={{marginBottom:'1vw'}}>{totalCost} M</span>
            <span className="count-name smallcard" style={{color:'white',fontSize:'1.2em'}}>Cost of Maintenance</span>
          </div>
          
        </div>
        <div className="col-md" style={{padding:'0 ',paddingLeft:'1rem'}}>
          <div className="card-counter" style={{backgroundColor:'rgb(50, 59, 70)' ,color:'white',margin:'0',padding:'0'}}>
          {/* <i className="fa fa-database"></i> */}
            <span className="count-numbers" style={{marginBottom:'1vw'}}>5</span>
            <span className="count-name smallcard" style={{color:'white',fontSize:'1.2em'}}>No. of Surveyers</span>
          </div>
          
        </div>
      </div>

      </>
      
     );
}
 
export default SmallCard;