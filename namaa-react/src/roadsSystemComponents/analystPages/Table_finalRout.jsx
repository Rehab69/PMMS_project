import React from 'react';
import './reports-style.css'



export default function RoutTable(props){
    const {MRoads} =props;
    const roadsSelectedToCalcGI = MRoads.filter(road=>road.isUdi===true)
      return (<>

<div  >

{/* <table className="table table-hover container"> */}
<table className="container table table-striped table-valign-middle" style={{ maxWidth: "100%" }}>

  <thead>
    <tr style={{verticalAlign:'middle',fontSize:'1.4rem'}}>
      <th className="middleTextInth">Route Id</th>
      <th className="middleTextInth">Route Name</th>
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
  {roadsSelectedToCalcGI.map(road=>(
    <tr className="hoverOnRow" key={road.roadId} style={{color:"white",fontSize:'1.4rem',fontWeight:'bold'}}>
      <td className="middleTextInth">{road.roadId}</td>
      <td className="middleTextInth">{road.roadName}</td>
      <td className="middleTextInth">{road.alligator} %</td>
      <td className="middleTextInth">{road.bleeding} %</td>
      <td className="middleTextInth">{road.blocking} %</td>
      <td className="middleTextInth">{road.edge} %</td>
      <td className="middleTextInth">{road.rutting} %</td>
      <td className="middleTextInth">{road.potholes} %</td>
      <td className="middleTextInth">{road.longtrans} %</td>
      <td className="middleTextInth" style={{ fontSize: 'medium', fontWeight: 'bolder' }}>
              <small style={{ position: 'static' }} className=
                {road.udi > 0 && road.udi < 30 ? "text-danger mr-1" :
                  road.udi >= 30 && road.udi < 50 ? "text-warning mr-1" :
                    road.udi >= 50 && road.udi < 70 ? "text-secondary mr-1" :
                      road.udi >= 70 && road.udi < 85 ? "text-primary mr-1" :
                        road.udi >= 85 ? "text-success mr-1" : null}
              >
                <i className={
                  road.udi >= 50 ? "fas fa-arrow-up" : "fas fa-arrow-down"
                } style={{ margin: "5px" }} />

              </small>
              {road.udi}
            </td>
      <td className="middleTextInth">{road.pavmentcondition}</td>

    </tr>
   ) )}
  </tbody>
</table>

</div>

      </>);
   
  }