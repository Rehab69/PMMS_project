import React from 'react';
import { Fragment } from 'react';


import WebMapViewRegion from "../WebMapView-Regions"

import RG_Table from '../Regions/RG_Table';

import "../Hala.css";


const RG_General = (props) => {
  const {Regions}=props;
  return (

    <Fragment>
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
              &nbsp;--- Home / Regions & Streets / Maintenance
        </div>
            <div className="info" >
              <div className="cont1" style={{ margin: "0 2rem" }}>


                <div className="card">
                  <div className="card-header map-card-head" style={{fontSize:'2rem'}}>Regions</div>
                  <div className="card-body  map-card-body">
                    <WebMapViewRegion urlRegion={props.urlRegion} urlStreets={props.urlStreets}/>
                  </div>
                </div>
                <div className="card">
              <div className="card-header map-card-head" style={{fontSize:'1.4rem',fontWeight:'700'}}>Surveyed Regions</div>

              <div className="card-body  map-card-body">
                  <RG_Table
                 Regions={Regions}
                 handleClickRegion={props.handleClickRegion} 
                   ></RG_Table>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default RG_General;