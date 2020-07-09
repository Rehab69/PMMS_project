import React from 'react';
import { CSVLink } from "react-csv";

import '../../CSS files/reports-style.css'
import Search from '../../helpers/pagination-search-filter/search';


const PriorityeReportMajor = (props) => {
    const {searchValue,handleOnChange,AllRoads} = props
   
    const allRoadsInPriority = AllRoads.filter(road=>road.hasPriority===true);
    const headers = [
        { label: "Road ID", key: "roadId" },
        { label: "Road Name", key: "roadName" },
        { label: "City", key: "city" },
        { label: "Total Length", key: "TotalLength" },
        { label: "GI", key: "udi" },
        { label: "Pavement Condition", key: "pavmentcondition" },
        { label: "Predicted GI", key: "PredictedUDI" },
        { label: "Maintenance Cost", key: "costMaintenanceInMillion" },
        { label: "Maintenance Duration", key: "MaintenanceDurationInMonths" },
        { label: "Maintenance treatment", key: "typeOfTreatment" },
        { label: "Remaining Assessed Life", key: "RemainingAssessedLife" },
        
    ];                  
    
    
        /////Searching///////////////
        const searchValueWithoutSpace = searchValue.trim()
        var searchedAllMRsInPriority = allRoadsInPriority;
    
        if (searchValueWithoutSpace !== "") {
            const allSearchedMRs = [...searchedAllMRsInPriority]
            // const allMRsWithLowerCaseName = allSearchedMRs.map(
            //     MR => {
            //         let MRWithLowerCaseName = { ...MR }
            //         MRWithLowerCaseName.RoadName = MRWithLowerCaseName.RoadName.toLowerCase();
            //         return MRWithLowerCaseName
            //     }
            // )
            searchedAllMRsInPriority = allSearchedMRs.filter(MR => {
                const copyMR ={...MR}
                if (copyMR.roadName.toLowerCase().includes(searchValueWithoutSpace)) {
                    return MR;
                }
                return null
            })
        }
        ///////////////////////////////////
    return (
<div >
        <div className="card" style={{background: "#3a3f48",color: "white"}}>
            <div className="card-header border-0" >
                <h3 className="card-title">Major Roads Priority Report</h3>
                <div className="card-tools">
                <div className="row">
                            <Search handleOnChange={handleOnChange} />
                    <CSVLink data={searchedAllMRsInPriority} headers={headers}
                        filename={"Priority-Report-Major-Roads.csv"}
                        className="btn btn-info"
                        target="_blank"
                        style={{padding:"1rem", marginRight:"1.25rem"}}
                    >
                        Export CSV file
                    </CSVLink>
                    <button className="btn btn-primary"
  onClick={()=>props.createAndDownloadPDF(allRoadsInPriority,"Priority Report Of Major Roads")
  }>Export PDF File</button>
                    
                   
                </div>
            </div>


           
                        </div>
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
                            <th>Predicted GI</th>
                            <th>Maintenance Cost</th>
                            <th>Maintenance Duration</th>   
                            <th>Maintenance treatment</th>       
                            <th>Remaining Assessed Life</th>       
                            {/* <th>More Details</th>        */}

                        </tr>
                    </thead>
                    <tbody>
                    {searchedAllMRsInPriority.map(road=>(
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
                              <td>
                              <small style={{position:"static"}} className=
                                
                                
                                {road.PredictedUDI>0&&road.PredictedUDI<30? "text-danger mr-1": 
                                road.PredictedUDI>30&&road.PredictedUDI<50? "text-warning mr-1":
                                road.PredictedUDI>50&&road.PredictedUDI<60?"text-info mr-1":
                                road.PredictedUDI>60&&road.PredictedUDI<75?"text-secondary mr-1":
                                road.PredictedUDI>75&&road.PredictedUDI<85?"text-primary mr-1":"text-success mr-1"}
                                
                                
                                
                                >
                                    <i className={
                                        
                                        road.PredictedUDI>50 ?"fas fa-arrow-up": "fas fa-arrow-down"
                                        } style={{ margin: "5px" }} />

                                </small>
                                  {road.PredictedUDI}</td>
                              <td>{road.costMaintenanceInMillion} M</td>
                              <td>{road.MaintenanceDurationInMonths} Months</td>
                              <td>{road.typeOfTreatment}</td>
                              <td>{road.RemainingAssessedLife} Yr</td>
                              {/* <td style={{ width: '1vw' }}>
                                <Link to="#" className="text-muted">
                                    <i className="fas fa-search" />
                                </Link>
                            </td> */}
                            
                          </tr>
                      ))}
                           
                           
                    </tbody>
                </table>

            </div>

            </div>
        </div>
    );
}

export default PriorityeReportMajor;