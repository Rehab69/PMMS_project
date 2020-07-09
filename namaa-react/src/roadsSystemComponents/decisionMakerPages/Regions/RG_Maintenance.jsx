import React from 'react';



import MaintenanceTable from "../Regions/MaintenanceTable"

import WebMapViewRegion from "../WebMapView-Regions"


export const RG_Maintenance = (props) => {
const {Regions}=props;

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
              &nbsp;--- Home / Regions & Streets / Priority
        </div>
            <div className="info" >
              <div className="cont1" style={{ margin: "0 2rem" }}>


                <div className="card">
                  <div className="card-header map-card-head" style={{fontSize:'2rem'}}>Regions in Priority</div>
                  <div className="card-body  map-card-body">
                    <WebMapViewRegion urlRegion={props.urlRegion}
                    urlStreets={props.urlStreets}
                     />
                  </div>
                </div>
                <div className="card">
                  <div className="card-header map-card-head" style={{fontSize:'2rem'}}>Regions in Maintenance Process</div>
                  <div className="card-body  map-card-body">
                  <MaintenanceTable
                    Regions={Regions}

                  />
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

export default RG_Maintenance;
