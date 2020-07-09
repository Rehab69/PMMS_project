import React from 'react';


import './reports-style.css'


export default function Regiontablefinal(props){
  const {Regions} =props;

  const regionsSelectedToCalcGI = Regions.filter(region=>region.isUdi===true)
      return (
      <>

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
      <th className="middleTextInth">% Alligator crack</th>
      <th className="middleTextInth">% Bleeding</th>
      <th className="middleTextInth">% Blocking cracks</th>
      <th className="middleTextInth">% Edge cracking</th>
      <th className="middleTextInth">% Rutting</th>
      <th className="middleTextInth">% Potholes</th>
      <th className="middleTextInth">% Long.&Trans.</th>
      <th className="middleTextInth">Calculated GI</th>
      <th className="middleTextInth">PC</th>

    </tr>
  </thead>
  <tbody>
  {regionsSelectedToCalcGI.map(region=>(
   <tr className="hoverOnRow" key={region.regionId} style={{color:"white",fontSize:'1.4rem',fontWeight:'bold'}}>
      <td className="middleTextInth">{region.regionId}</td>
      <td className="middleTextInth">{region.RegionName}</td>
      <td className="middleTextInth">{region.noStreets}</td>
      <td className="middleTextInth">{region.area}</td>
      <td className="middleTextInth">{region.population}</td>
      <td className="middleTextInth">{region.city}</td>
      <td className="middleTextInth">{region.alligator} %</td>
      <td className="middleTextInth">{region.bleeding} %</td>
      <td className="middleTextInth">{region.blocking} %</td>
      <td className="middleTextInth">{region.edge} %</td>
      <td className="middleTextInth">{region.rutting} %</td>
      <td className="middleTextInth">{region.potholes} %</td>
      <td className="middleTextInth">{region.longtrans} %</td>
      <td className="middleTextInth" style={{ fontSize: 'medium', fontWeight: 'bolder' }}>
              <small style={{ position: 'static' }} className=
                {region.udi > 0 && region.udi < 30 ? "text-danger mr-1" :
                  region.udi >= 30 && region.udi < 50 ? "text-warning mr-1" :
                    region.udi >= 50 && region.udi < 70 ? "text-secondary mr-1" :
                      region.udi >= 70 && region.udi < 85 ? "text-primary mr-1" :
                        region.udi >= 85 ? "text-success mr-1" : null}
              >
                <i className={
                  region.udi >= 50 ? "fas fa-arrow-up" : "fas fa-arrow-down"
                } style={{ margin: "5px" }} />

              </small>
              {region.udi}
            </td>
      <td className="middleTextInth">{region.pavmentcondition}</td>

    </tr>
   ) )}
  </tbody>
</table>

</div>

      </>);
   
  }