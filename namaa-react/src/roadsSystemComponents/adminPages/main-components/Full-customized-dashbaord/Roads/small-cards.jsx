import React from 'react';

const SmallCard = (props) => {
  const {roadAfterCalcUDI ,roadInPriority} = props;
  const roadInMaintenance = roadInPriority.filter(road=>road.costMaintenanceInMillion)
  const costs = roadInMaintenance.map(road=>{return road.costMaintenanceInMillion})
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
    <span className="count-numbers" style={{marginBottom:'1vw'}}>{roadAfterCalcUDI.length + 4}</span>
            <span className="count-name smallcard"style={{color:'white',fontSize:'1.2em'}} >Total No. Roads</span>
          </div>
        </div>
        <div className="col-md"  style={{padding:'0 1rem'}}>
          <div className="card-counter " style={{backgroundColor:'rgb(50, 59, 70)',color:'white',margin:'0',padding:'0'}}>
            {/* <i className="fa fa-ticket iconInSmallCards"></i> */}
    <span className="count-numbers" style={{marginBottom:'1vw'}}>{ roadAfterCalcUDI.length }</span>
            <span className="count-name smallcard" style={{color:'white',fontSize:'1.2em'}}>No. of surveying Roads</span>
          </div>
        </div>
        <div className="col-md" style={{padding:'0 1rem'}}>
          <div className="card-counter" style={{backgroundColor:'rgb(50, 59, 70)' ,color:'white',margin:'0',padding:'0'}}>
            {/* <i className="fa fa-database"></i> */}
            <span className="count-numbers" style={{marginBottom:'1vw'}}>{roadInMaintenance.length}</span>
            <span className="count-name smallcard" style={{color:'white',fontSize:'1.2em'}}>Roads in Maintenance Plan</span>
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
            <span className="count-name smallcard" style={{color:'white',fontSize:'1.2em'}}>No. Equipment in Surveying</span>
          </div>
          
        </div>
      </div>

      </>
      
     );
}
 
export default SmallCard;