import React from 'react';
import { CSVLink } from "react-csv";

import '../../CSS files/reports-style.css'
import Search from '../../helpers/pagination-search-filter/search';
import axios from 'axios'
import {saveAs} from 'file-saver'


 
const PriorityeReportRegion = (props) => {
    const {searchValue,handleOnChange,AllRegions} = props
    
    const AllRegionsInMaintenance = AllRegions.filter(region=>region.hasPriority===true);
    console.log(props)
    const headers = [
        { label: "Region ID", key: "regionId" },
        { label: "Region Name", key: "RegionName" },
        { label: "City", key: "city" },
        { label: "Total Length", key: "noStreets" },
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
      var searchedAllRegionsInPriority = AllRegionsInMaintenance;
  
      if (searchValueWithoutSpace !== "") {
          const allSearchedRegions = [...searchedAllRegionsInPriority]
        //   const allRegionsWithLowerCaseName = allSearchedRegions.map(
        //       Region => {
        //           let RegionWithLowerCaseName = { ...Region }
        //           RegionWithLowerCaseName.RegionName = RegionWithLowerCaseName.RegionName.toLowerCase();
        //           return RegionWithLowerCaseName
        //       }
        //   )
          searchedAllRegionsInPriority = allSearchedRegions.filter(Region => {
              const copyRegion ={...Region}
              if (copyRegion.RegionName.toLowerCase().includes(searchValueWithoutSpace)) {
                  return Region;
              }
              return null
          })
      }


      ///////////////////////////////////
    return (
<div>
        <div className="card" style={{background: "#3a3f48",color: "white"}}>
            <div className="card-header border-0" >
                <h3 className="card-title">Regions & Streets Priority Report</h3>
                <div className="card-tools">
                      <div className="row">
                            <Search handleOnChange={handleOnChange} />
                           

                    <CSVLink data={searchedAllRegionsInPriority} headers={headers}
                        filename={"Regions-Streets-Priority-Report.csv"}
                        className="btn btn-info"
                        target="_blank"
                        style={{padding:"1rem", marginRight:"1.25rem"}}
                    >
                        Export CSV file
                    </CSVLink>
                    <button className="btn btn-primary"
					onClick={()=>props.createAndDownloadPDF(AllRegionsInMaintenance,"Priority Report Of Regions")
					}>Export PDF File</button>
                    

                        </div>

                 
                </div>
            </div>


            {/* <div className="row">
                            <Search handleOnChange={handleOnChange} />
                        </div> */}
            <div className="card-body table-responsive p-0" style={{maxHeight:"70vh"}}>
                <table className="table table-striped table-valign-middle">
                    <thead>
                        <tr>
                            <th>Region ID</th>
                            <th>Region Name</th>
                            <th>City Name</th>
                            <th>Total No. of Streets</th>
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
                    {searchedAllRegionsInPriority.map(region=>(
                          <tr className="hoverOnRow" key={region.regionId}>
                              <td>{region.regionId}</td>
                              <td>{region.RegionName}</td>
                              <td>{region.city}</td>
                              <td>{region.noStreets}</td>
                              <td style={{ fontSize: 'medium', fontWeight: 'bolder' }}>
                                <small style={{position:'static'}} className=
                                
                                
                                {region.udi>0&&region.udi<30? "text-danger mr-1": 
                                region.udi>30&&region.udi<50? "text-warning mr-1":
                                region.udi>50&&region.udi<70?"text-secondary mr-1":
                                region.udi>70&&region.udi<85?"text-primary mr-1":
                                region.udi>85? "text-success mr-1":null}
                                
                                
                                
                                >
                                    <i className={
                                        
                                        region.udi>50 ?"fas fa-arrow-up": "fas fa-arrow-down"
                                        } style={{ margin: "5px" }} />

                                </small>
                                  {region.udi}
                                </td>
                              <td>{region.pavmentcondition}</td>
                              <td>
                              <small style={{position:"static"}} className=
                                
                                
                                {region.PredictedUDI>0&&region.PredictedUDI<30? "text-danger mr-1": 
                                region.PredictedUDI>30&&region.PredictedUDI<50? "text-warning mr-1":
                                region.PredictedUDI>50&&region.PredictedUDI<60?"text-info mr-1":
                                region.PredictedUDI>60&&region.PredictedUDI<75?"text-secondary mr-1":
                                region.PredictedUDI>75&&region.PredictedUDI<85?"text-primary mr-1":"text-success mr-1"}
                                
                                
                                
                                >
                                    <i className={
                                        
                                        region.PredictedUDI>50 ?"fas fa-arrow-up": "fas fa-arrow-down"
                                        } style={{ margin: "5px" }} />

                                </small>
                                  {region.PredictedUDI}</td>
                              <td>{region.costMaintenanceInMillion} M</td>
                              <td>{region.MaintenanceDurationInMonths} Months</td>
                              <td>{region.typeOfTreatment}</td>
                              <td>{region.RemainingAssessedLife} Yr</td>
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

export default PriorityeReportRegion;