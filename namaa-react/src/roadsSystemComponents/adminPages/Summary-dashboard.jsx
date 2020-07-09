
import React from "react";


import './JS files/sidebar-script'
import './CSS files/sidebar-style.css'
import './CSS files/Dashboard/style-dashboard.css'
import './CSS files/map-style.css'
import './CSS files/adminlte.min.css'
import './CSS files/cards-style.css'

import SmallCard from './main-components/Full-customized-dashbaord/summary/small-cards';
import Table from "./main-components/Full-customized-dashbaord/Roads/table-roads";
import WebMapViewForFullDash from "./main-components/Full-customized-dashbaord/summary/map-for-dashboard";
import PCSummary from "./main-components/Full-customized-dashbaord/summary/stacked-col-chart";
import RoadsRegionsCostMaintenance from "./main-components/Full-customized-dashbaord/summary/grouped-bar";
import TimeLineChart from "./main-components/Full-customized-dashbaord/summary/multi-series-timeline";


const FullDashboard = (props) => {
  const { roadAfterCalcUDI,urlRoads, roadInPriority,urlRegion,urlStreets,streets,regionsAfterCalcUDI,regionsInPriority } = props;
  // if(roadAfterCalcUDI.length===0&&urlRoads)
  // {
  //   //spinner
  // }else
  return (
    <>


      <main className="page-content" id="page-content2" style={{ paddingTop: '0px', paddingRight: "1vw" }}>

        <div className="container-fluid" style={{ backgroundColor: 'rgb(70, 68, 68)', border: 'hidden', borderRadius: '1.5vw', marginLeft: '2vw' }}>
          <div className="col" style={{ paddingLeft: '20px', paddingRight: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="col" style={{ justifyContent: 'center' }}>
              <div style={{ marginBottom: '1vh' }}>
                <SmallCard  
                  streets={streets}
                  roadAfterCalcUDI={roadAfterCalcUDI} 
                  roadInPriority={roadInPriority} 
                  regionsAfterCalcUDI={regionsAfterCalcUDI}
                  regionsInPriority={regionsInPriority}
                 />
              </div>

              <div className="col" style={{
                display: 'flex', flexDirection: 'column'
                , justifyContent: "center", alignSelf: "center", alignItems: "center",
                padding: '0px', margin: '5vh 0px', height: '105vh'
              }}>

                <div className="row" style={{ display: 'flex', flexDirection: 'row', boxShadow:" 2px 2px 10px #DADADA",
                 justifyContent: 'center',marginBottom:'5vh',marginTop:'5vh', height: '60vh', flexGrow: '3', width: '100%' }}>

                  <div className='col-4' style={{ height: '60vh', display: 'flex', flexGrow: '1',padding:'0' }}>
                    <div className="card" style={{ width: '100%', marginBottom: '0px' }}>

                      <div className="card-body" style={{ backgroundColor: "rgb(50, 59, 70)" }}>
                          <p className="d-flex flex-column" style={{ color: "white" }}>
                            <span className="text-bold text-lg" style={{ fontSize: "1.5rem" }}>Pavement Condition of Assets</span>
                          </p>
                        <div className="tab-content p-0"></div>
                        <PCSummary  
                        roadAfterCalcUDI={roadAfterCalcUDI} 
                        regionsAfterCalcUDI={regionsAfterCalcUDI}  />
                      
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-5" style={{ margin: '1vh 0px', height: '60vh', display: 'flex', flexGrow: '1',marginTop:'0vh',padding:'0' }}>
                    <WebMapViewForFullDash urlRoads={urlRoads}
                                          urlRegion={urlRegion}
                                          urlStreets={urlStreets} 
                                          height={"50vh"} width={"100%"} />
                  </div>

                  <div className='col-3' style={{ height: '60vh', display: 'flex', flexGrow: '1' ,padding:'0'}}>
                    <div className="card" style={{ height: '60vh', width: '100%', marginBottom: '0px' }}>
                      <div className="card-body" style={{ backgroundColor: "rgb(50, 59, 70)" }}>
                        <div className="d-flex">
                          <p className="d-flex flex-column" style={{ color: "white" }}>
                            <span className="text-bold text-lg" style={{ fontSize: "1.5rem" }}>Cost Maintenance per Treatment type</span>
                          </p>

                        </div>
                        
                        <RoadsRegionsCostMaintenance 
                        roadInPriority={roadInPriority}
                        regionsInPriority={regionsInPriority}
                        />
                       
                      </div>
                    </div >
                  </div>
                </div>


                <div className="col" style={{ display: 'flex' ,flexDirection: 'column', boxShadow:" 2px 2px 10px #DADADA", justifyContent: 'center', height: '45vh' ,padding:'0',marginBottom:'2rem',backgroundColor:'#323b46'}}>
                <div style={{display:'flex', justifyContent:'center'}}>
                <span style={{display:'inline',fontSize:'2.3rem',color:'white',marginBottom:'2px',backgroundColor:'#525965',margin:"1rem"
                ,border:'unset',padding:'0 1vw', borderRadius:'3vw'
              }}>
                  Maintenance Duration for Assets</span>
                </div>
                  <TimeLineChart  roadInPriority={roadInPriority}
                        regionsInPriority={regionsInPriority} />
               
                </div>

              </div>

              {/* <Table AllRoads={roadInPriority} /> */}

              {/* <Summary /> */}
            </div>
          </div>
        </div>
      </main>

    </>
  );
};

export default FullDashboard;
