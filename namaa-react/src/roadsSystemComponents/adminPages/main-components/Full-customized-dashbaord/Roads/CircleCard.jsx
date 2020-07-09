import React from 'react';


import CircleChart from '../../../helpers/Circle-Chart';

const CircleCard = (props) => {
    console.log('props')
    return (  
   
     <div className="card" style={{width:'100%', marginBottom:'0px'}}>

  <div className="card-body" style={{backgroundColor:"rgb(50, 59, 70)"}}>
    <div className="tab-content p-0">
     
     <CircleChart/>
     <span style={{color:"white",fontSize:"1.5rem",fontWeight:'bold',display:'flex',justifyContent:'flex-end'}}>Roads Classification</span>
    </div>
  </div>
</div>

    );
}
 
export default CircleCard;