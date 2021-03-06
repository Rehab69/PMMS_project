import React from "react";


import TabbleFinalRout from "./Table_finalRout";
import UdiRoutMap from './Udi_rout_map';


const Udi_rout = (props) => {
  const {MRoads,urlMajor} = props;

  return (
    <main className="page-content" style={{ margin: '0px' }}>
      <div className="container-fluid">


        <div className="main_content">
          <div
            className="header sticky-top"
            style={{
              backgroundColor: "rgb(44, 44, 52)",
              borderBottomColor: " rgb(10, 11, 24)",
              height: "3rem",
              padding: "1rem",
              margin: '0px 2rem',
              color: "white"
            }}
          >
            &nbsp;--- Home / Major Roads / Pavement Condition
        </div>
          <div className="info" >
            <div className="cont1" style={{ margin: "0 2rem" }}>


              <div className="card">
                <div className="card-header map-card-head" style={{ fontSize: '2rem', fontWeight: '700' }}>Major Roads</div>
                <div className="card-body  map-card-body">
                  <UdiRoutMap urlMajor={urlMajor} />
                </div>
              </div>
              <div className="card">
                <div className="card-header map-card-head" style={{ fontSize: '1.4rem', fontWeight: '700' }}>Major Roads Pavement Condition</div>

                <div className="card-body  map-card-body">
                  <TabbleFinalRout MRoads={MRoads}></TabbleFinalRout>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default Udi_rout;