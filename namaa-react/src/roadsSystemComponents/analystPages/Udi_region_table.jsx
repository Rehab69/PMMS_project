import React, {  useRef } from "react";


import './reports-style.css'


export default function Udi_region_table(props){
  const {Regions} =props;
 
    
      return (<>

<div  >

{/* <table className="table table-hover container"> */}
<table className="container table table-striped table-valign-middle" style={{ maxWidth: "100%" }}>

  <thead>
    <tr style={{verticalAlign:'middle',fontSize:'1.4rem'}}>
      <th className="middleTextInth">Region Id</th>
      <th className="middleTextInth">Region Name</th>
      <th className="middleTextInth">No of Streets</th>
      <th className="middleTextInth">Area</th>
      <th className="middleTextInth">Population</th>
      <th className="middleTextInth">City</th>
      <th className="middleTextInth">GI</th>
    </tr>
  </thead>
  <tbody>
  {Regions.map(region=>(
    <tr className="hoverOnRow" key={region.regionId} style={{color:"white",fontSize:'1.4rem',fontWeight:'bold'}}>
      <td className="middleTextInth">{region.regionId}</td>
      <td className="middleTextInth">{region.RegionName}</td>
      <td className="middleTextInth">{region.noStreets}</td>
      <td className="middleTextInth">{region.area}</td>
      <td className="middleTextInth">{region.population}</td>
      <td className="middleTextInth">{region.city}</td>
      <td className="middleTextInth"><div className="form-check">
      <span className="btn" style={{ backgroundColor: "white" }}>
                  <i   onClick={()=>props.handleClickRegion(region)} 
                 className= { region.isUdi===true ?"fas fa-check-circle":"far fa-circle" }></i></span>
                <label className="form-check-label" htmlFor="defaultCheck1"></label>
              </div>
              </td>
    </tr>
   ) )}
  </tbody>
</table>

</div>

      </>);
   
  }



