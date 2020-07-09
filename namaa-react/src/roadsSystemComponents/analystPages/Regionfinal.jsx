import React, { Fragment } from "react";

import Regiontablefinal from './Regiontablefinal';


import Udi_region_map from "./Udi_region_map";

const Regionfinal=(props)=>{
  const {Regions,urlRegion} =props;
  
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
            &nbsp;--- Home / Regions & Streets / Pavement Condition
        </div>
          <div className="info" >
            <div className="cont1" style={{ margin: "0 2rem" }}>

            <div className="card">
                <div className="card-header map-card-head" 
                style={{fontSize:'2rem',fontWeight:'700'}}>Regions</div>
                <div className="card-body  map-card-body">
             <Udi_region_map urlRegion={urlRegion} />
              </div>
            </div>
            <div className="card">
              <div className="card-header map-card-head" style={{fontSize:'1.4rem',fontWeight:'700'}}>Regions Pavement Condition</div>

              <div className="card-body  map-card-body">
              <Regiontablefinal Regions={Regions}  ></Regiontablefinal>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      </div>
      </main>
    );
  }

export default Regionfinal;