import React, { Fragment } from "react";
import {Link } from 'react-router-dom'

import UdiRegionMap from "./Udi_region_map";
import UdiRegionTable from "./Udi_region_table";



const Udi_region=(props)=>{
  const {Regions,urlRegion} =props;
    return(
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
            &nbsp;--- Home / Regions & Streets / Surveyed Region
        </div>
          <div className="info" >
            <div className="cont1" style={{ margin: "0 2rem" }}>


              <div className="card">
                <div className="card-header map-card-head" style={{fontSize:'2rem',fontWeight:'700'}}>Regions </div>
                <div className="card-body  map-card-body">
              <UdiRegionMap urlRegion={urlRegion} />              
              </div>
            </div>
            <div className="card">
              <div className="card-header map-card-head" style={{fontSize:'1.4rem',fontWeight:'700'}}>Surveyed Regions</div>

              <div className="card-body  map-card-body">
              <UdiRegionTable Regions={Regions}  handleClickRegion={props.handleClickRegion} />
              </div>
			  <Link to="/RMS/Analyst/REGcondition">
              <button className='btn btn-info btn-lg' style={{position:"absolute",right:0,marginTop:50}}>Calculate GI</button>
              </Link>
            </div>
          </div>
         
        </div>
      </div>
      </div>
      </main>
      </Fragment>
    )}
export default Udi_region;
















