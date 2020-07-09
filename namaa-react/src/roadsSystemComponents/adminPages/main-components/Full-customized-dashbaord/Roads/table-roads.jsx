import React from 'react';


const Table = (props) => {
    const {AllRoads} =props;
    const priorRoads = AllRoads.filter(road=>road.hasPriority)
console.log(props)
    return (
        <>
        <div className="card"  style={{background: "#3a3f48",color: "white", margin:'7vh 0vh 3px 0px'}}>
            <div className="card-header border-0">
                <h3 className="card-title">Major Roads Maintenance Report</h3>
               
            </div>


            <div className="card-body table-responsive p-0" style={{ maxHeight: "70vh" }}>
            <table className="table table-striped table-valign-middle">
                        <thead>
                            <tr>
                                <th>Road ID</th>
                                <th>Road Name</th>
                                <th>City Name</th>
                                <th>Total Length</th>
                                <th>No. of Sections</th>
                                <th>No. of Intersections</th>
                                <th>Major Type of Cracks in roads</th>
                                <th>Calculated GI</th>
                                <th>Pavement Condition</th>
                                <th>Road Construction Year</th>
                                <th>Life Achieved of Road</th>
                                <th>Asset Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {AllRoads.map(road => (
                                <tr  key={road.roadId} className="hoverOnRow" >
                                    <td>{road.roadId}</td>
                                    <td>{road.roadName}</td>
                                    <td>{road.city}</td>
                                    <td>{road.TotalLength} KM</td>
                                    <td>{road.noSection}</td>
                                    <td>{road.noIntersection}</td>
                                    <td>{road.MajorTypeOfCracks}</td>
                                    <td style={{ fontSize: 'medium', fontWeight: 'bolder' }}>
                                        <small style={{position:'static'}} className=


                                            {road.udi > 0 && road.udi < 30 ? "text-danger mr-1" :
                                                road.udi > 30 && road.udi < 50 ? "text-warning mr-1" :
                                                    road.udi > 50 && road.udi < 70 ? "text-secondary mr-1" :
                                                        road.udi > 70 && road.udi < 85 ? "text-primary mr-1" :
                                                            road.udi >85? "text-success mr-1":null}



                                        >
                                            <i className={

                                                road.udi > 50 ? "fas fa-arrow-up" : "fas fa-arrow-down"
                                            } style={{ margin: "5px" }} />

                                        </small>
                                        {road.udi}
                                    </td>
                                    <td>{road.pavmentcondition}</td>
                                    <td>{road.constructionYr}</td>
                                    <td>{road.lifeAchieved} Yr</td>
                                    <td>{road.assetAge} Yr</td>
                                    

                                </tr>
                            ))}


                        </tbody>
                    </table>

            </div>
            </div>
            <div className="card"  style={{background: "#3a3f48",color: "white", margin:'4vh 0px'}}>

            <div className="card-header border-0">
                <h3 className="card-title">Major Roads Priority Report</h3>
               
            </div>

            {/*Table*/ }
            <div className="card-body table-responsive p-0" style={{maxHeight:"70vh"}}>
                <table className="table table-striped table-valign-middle">
                    <thead>
                        <tr>
                            <th>Road ID</th>
                            <th>Road Name</th>
                            <th>City Name</th>
                            <th>Total Length</th>
                            <th>Calculated GI</th>
                            <th>Pavement Condition</th>
                    
                            <th>Maintenance Cost</th>
                            <th>Maintenance Duration</th>   
                            <th>Maintenance treatment</th>       
                            <th>Remaining Assessed Life</th>       
                                

                        </tr>
                    </thead>
                    <tbody>
                    {priorRoads.map(road=>(
                          <tr className="hoverOnRow" key={road.roadId}>
                              <td>{road.roadId}</td>
                              <td>{road.roadName}</td>
                              <td>{road.city}</td>
                              <td>{road.TotalLength} KM</td>
                              <td style={{ fontSize: 'medium', fontWeight: 'bolder' }}>
                                <small style={{position:'static'}} className=
                                
                                
                                {road.udi>0&&road.udi<30? "text-danger mr-1": 
                                road.udi>30&&road.udi<50? "text-warning mr-1":
                                road.udi>50&&road.udi<70?"text-secondary mr-1":
                                road.udi>70&&road.udi<85?"text-primary mr-1":
                                road.udi>>85? "text-success mr-1":null}
                                
                                
                                >
                                    <i className={
                                        
                                        road.udi>50 ?"fas fa-arrow-up": "fas fa-arrow-down"
                                        } style={{ margin: "5px" }} />

                                </small>
                                  {road.udi}
                                </td>
                              <td>{road.pavmentcondition}</td>
                            
                              <td>{road.costMaintenanceInMillion} M</td>
                              <td>{road.MaintenanceDurationInMonths} Months</td>
                              <td>{road.typeOfTreatment}</td>
                              <td>{road.RemainingAssessedLife} Yr</td>
                            
                            
                          </tr>
                      ))}
                           
                           
                    </tbody>
                </table>

            </div>

        </div>
        </>
    );
}

export default Table;