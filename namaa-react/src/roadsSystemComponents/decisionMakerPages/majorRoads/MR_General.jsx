import React from 'react';
import { Fragment } from 'react';


import WebMapViewMajor from "../WebMapView-Major"

import MR_Table from '../majorRoads/MR_Table';

import "../Hala.css";



const MR_General = (props) => {
  const {MRoads} = props
  return (


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
            &nbsp;--- Home / Major Roads / Maintenance
        </div>
          <div className="info" >
            <div className="cont1" style={{ margin: "0 2rem" }}>


              <div className="card">
                <div className="card-header map-card-head" style={{fontSize:'2rem'}}>Major Roads</div>
                <div className="card-body  map-card-body">
                  <WebMapViewMajor urlMajor={props.urlMajor}/>
                </div>
              </div>
              <div className="card">
              <div className="card-header map-card-head" style={{fontSize:'1.4rem',fontWeight:'700'}}>Surveyed Major Roads</div>

              <div className="card-body  map-card-body">
                <MR_Table 
                MRoads={MRoads} 
                handleClickCheckbox={props.handleClickCheckbox}
                 ></MR_Table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}

export default MR_General;