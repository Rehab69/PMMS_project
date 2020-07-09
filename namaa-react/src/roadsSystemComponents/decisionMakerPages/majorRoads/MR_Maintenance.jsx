import React from 'react';



import MaintenanceTable from "../majorRoads/MaintenanceTable"

import WebMapViewMajor from "../WebMapView-Major"

export const MR_Maintenance = (props) => {
  const {MRoads} = props

  return (
    <>
      <main className="page-content" style={{margin:'0px'}}>
        <div className="container-fluid">


          <div className="main_content">
            <div
              className="header sticky-top"
              style={{
                backgroundColor: "rgb(44, 44, 52)",
                borderBottomColor: " rgb(10, 11, 24)",
                height: "3rem",
                padding: "1rem",
                margin:'0px 2rem',
                color:"white"
              }}
            >
              &nbsp;--- Home / Major Roads / Priority
        </div>
            <div className="info" >
              <div className="cont1" style={{ margin: "0 2rem" }}>


                <div className="card">
                  <div className="card-header map-card-head" style={{fontSize:'2rem'}}>Major Roads in priority</div>
                  <div className="card-body  map-card-body">
                    <WebMapViewMajor urlMajor={props.urlMajor} />
                  </div>
                </div>
                <div className="card">
                  <div className="card-header map-card-head" style={{fontSize:'2rem'}}>Regions in Maintenance Process</div>
                  <div className="card-body  map-card-body">
                  <MaintenanceTable  MRoads={MRoads}  />
                </div>
              </div>


            </div>
          </div>


</div>
        </div>
      </main>






    </>
  )




};

export default MR_Maintenance;
