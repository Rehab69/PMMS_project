import React from 'react';
import { CSVLink } from "react-csv";

import '../../CSS files/reports-style.css'
import Search from '../../helpers/pagination-search-filter/search';



const MaintenanceReportRegions = (props) => {
    const { searchValue, handleOnChange,AllRegions } = props

  
    const headers = [
        { label: "Region ID", key: "regionId" },
        { label: "Region Name", key: "RegionName" },
        { label: "City", key: "city" },
        { label: "No. Of Streets", key: "noStreets" },
        { label: "Area in m2", key: "area" },
        { label: "Major Type Of Cracks in Region", key: "MajorTypeOfCracks" },
        { label: "GI", key: "udi" },
        { label: "Pavement Condition", key: "pavmentcondition" },
        { label: "Region Construction Year", key: "constructionYr" },
        { label: "Life Achieved of Region", key: "lifeAchieved" },
        { label: "Asset Age", key: "assetAge" }
    ];


    /////Searching///////////////
    const searchValueWithoutSpace = searchValue.trim()
    var searchedAllRegionsInMaintenance = AllRegions;

    if (searchValueWithoutSpace !== "") {
        const allSearchedRegions = [...searchedAllRegionsInMaintenance]
        // const allRegionsWithLowerCaseName = allSearchedRegions.map(
        //     Region => {
        //         let RegionWithLowerCaseName = { ...Region }
        //         RegionWithLowerCaseName.RegionName = RegionWithLowerCaseName.RegionName.toLowerCase();
        //         return RegionWithLowerCaseName
        //     }
        // )
        searchedAllRegionsInMaintenance = allSearchedRegions.filter(Region => {
            const copyRegion = {...Region}
            if (copyRegion.RegionName.toLowerCase().includes(searchValueWithoutSpace)) {
                return Region;
            }
            return null
        })
    }
    ///////////////////////////////////



    return (
        <div >
            <div className="card"  style={{background: "#3a3f48",color: "white"}}>
                <div className="card-header border-0" >
                    <h3 className="card-title">Regions & Streets Maintenance Report</h3>
                    <div className="card-tools">
                    <div className="row">
                    <Search handleOnChange={handleOnChange} />
                        <CSVLink data={AllRegions} headers={headers}
                            filename={"my-file.csv"}
                            className="btn btn-info"
                            target="_blank"
                            style={{padding:"1rem", marginRight:"1.25rem"}}
                        >
                            Export CSV file
                    </CSVLink>
					  <button className="btn btn-primary"
					  onClick={()=>props.createAndDownloadPDF(AllRegions,"Maintenance Report Of Regions")
					  }>Export PDF File</button>
                    

                    </div>
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
                                {/* <th>More Details</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {searchedAllRegionsInMaintenance.map(Regions => (
                                <tr className="hoverOnRow" key={Regions.regionId}>
                                    <td>{Regions.regionId}</td>
                                    <td>{Regions.RegionName}</td>
                                    <td>{Regions.city}</td>
                                    <td>{Regions.noStreets}</td>
                                    <td>{Regions.area} M2</td>
                                    <td>{Regions.MajorTypeOfCracks}</td>
                                    <td style={{ fontSize: 'medium', fontWeight: 'bolder'}}>
                                        <small  style={{position:'static'}} className=


                                            {Regions.udi > 0 && Regions.udi < 30 ? "text-danger mr-1" :
                                                Regions.udi >= 30 && Regions.udi < 50 ? "text-warning mr-1" :
                                                    Regions.udi >= 50 && Regions.udi < 70 ? "text-secondary mr-1" :
                                                        Regions.udi >= 70 && Regions.udi < 85 ? "text-primary mr-1" :
                                                            Regions.udi >=85? "text-success mr-1":null}



                                        >
                                            <i className={

                                                Regions.udi > 50 ? "fas fa-arrow-up" : "fas fa-arrow-down"
                                            } style={{ margin: "5px" }} />

                                        </small>
                                        {Regions.udi}
                                    </td>
                                    <td>{Regions.pavmentcondition}</td>
                                    <td>{Regions.constructionYr}</td>
                                    <td>{Regions.lifeAchieved} Yr</td>
                                    <td>{Regions.assetAge} Yr</td>
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

export default MaintenanceReportRegions;