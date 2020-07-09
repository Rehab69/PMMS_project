import React from 'react';
import { Link } from 'react-router-dom';


const TableRegions = (props) => {
    const {AllRegions} =props
    return (
        <div className="card"  style={{background: "#3a3f48",color: "white"}}>
            <div className="card-header border-0">
                <h3 className="card-title">Regions Maintenance Report</h3>
                <div className="card-tools">
                    <Link to="#" className="btn btn-tool btn-sm">
                        <i className="fas fa-download" />
                    </Link>
                    <Link to="#" className="btn btn-tool btn-sm">
                        <i className="fas fa-bars" />
                    </Link>
                </div>
            </div>


            <div className="card-body table-responsive p-0" style={{ maxHeight: "70vh" }}>
            <table className="table table-striped table-valign-middle">
                        <thead>
                            <tr>
                            <th>Region ID</th>
                                <th>Region Name</th>
                                <th>City Name</th>
                                <th>No. of Streets</th>
                                <th>Area in m2</th>
                                <th>Major Type of Cracks in Region</th>
                                <th>Calculated GI</th>
                                <th>Pavement Condition</th>
                                <th>Region Construction Year</th>
                                <th>Life Achieved of Region</th>
                                <th>Asset Age</th>
                                <th>More Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {AllRegions.map(Region => (
                               <tr className="hoverOnRow" key={Region.regionId}>
                               <td>{Region.regionId}</td>
                               <td>{Region.RegionName}</td>
                               <td>{Region.city}</td>
                               <td>{Region.noStreets}</td>
                               <td>{Region.area} M2</td>
                               <td>{Region.MajorTypeOfCracks}</td>
                               <td style={{ fontSize: 'medium', fontWeight: 'bolder'}}>
                                   <small  style={{position:'static'}} className=


                                       {Region.udi > 0 && Region.udi < 30 ? "text-danger mr-1" :
                                           Region.udi >= 30 && Region.udi < 50 ? "text-warning mr-1" :
                                               Region.udi >= 50 && Region.udi < 70 ? "text-secondary mr-1" :
                                                   Region.udi >= 70 && Region.udi < 85 ? "text-primary mr-1" :
                                                       Region.udi >=85? "text-success mr-1":null}



                                   >
                                       <i className={

                                           Region.udi > 50 ? "fas fa-arrow-up" : "fas fa-arrow-down"
                                       } style={{ margin: "5px" }} />

                                   </small>
                                   {Region.udi}
                               </td>
                               <td>{Region.pavmentcondition}</td>
                               <td>{Region.constructionYr}</td>
                               <td>{Region.lifeAchieved} Yr</td>
                               <td>{Region.assetAge} Yr</td>
                                    

                                </tr>
                            ))}


                        </tbody>
                    </table>

            </div>


        </div>
    );
}

export default TableRegions;