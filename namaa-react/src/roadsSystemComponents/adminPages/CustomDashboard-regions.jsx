import React from "react";


import './JS files/sidebar-script'
import './CSS files/sidebar-style.css'
import './CSS files/Dashboard/style-dashboard.css'
import './CSS files/map-style.css'
import './CSS files/adminlte.min.css'
import './CSS files/cards-style.css'

import SmallCard from './main-components/Full-customized-dashbaord/Regions/small-cards';
import ColumnChartRegion from "./main-components/Full-customized-dashbaord/Regions/column-chart-frame";
import WebMapViewForRegionDash from "./main-components/Full-customized-dashbaord/Regions/map-for-dashboard";
import HrBarChart from './helpers/Regions/Horizontal-barChart';
import PieChart from "./helpers/Regions/PieChart-component";
import TableRegion from "./main-components/Full-customized-dashbaord/Regions/table-regions";


const CustomizedDashboardRegions = (props) => {
  const { regionsAfterCalcUDI,urlRegion,urlStreets, regionsInPriority ,handleClickOnColChartInRegions,defExpressRegion,
    handleClickOnHrChartInRegions} = props;
  // if(regionsAfterCalcUDI.length===0&&urlRegion)
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
                <SmallCard regionsAfterCalcUDI={regionsAfterCalcUDI} regionsInPriority={regionsInPriority} />
              </div>

              <div className="col" style={{
                display: 'flex', flexDirection: 'column'
                , justifyContent: "center", alignSelf: "center", alignItems: "center",
                padding: '0px', margin: '5vh 0px', height: '90vh'
              }}>

                <div className="row" style={{ display: 'flex', flexDirection: 'row', boxShadow:" 2px 2px 10px #DADADA",
                 justifyContent: 'center',marginBottom:'5vh',marginTop:'5vh', height: '60vh', flexGrow: '3', width: '100%' }}>

                  <div className='col-4' style={{ height: '60vh', display: 'flex', flexGrow: '1',padding:'0' }}>
                    <div className="card" style={{ width: '100%', marginBottom: '0px' }}>

                      <div className="card-body" style={{ backgroundColor: "rgb(50, 59, 70)" }}>
                          <p className="d-flex flex-column" style={{ color: "white" }}>
                            <span className="text-bold text-lg" style={{ fontSize: "1.5rem" }}>Cost Maintenance per treatment type</span>
                          </p>
                        <div className="tab-content p-0"></div>
                        <PieChart regionsInPriority={regionsInPriority} />
                        <span className="mr-2" style={{ color: 'white',fontSize:'1.2rem' }}>
                          <i className="fas fa-square text-primary" /> This Year (2020)
                           </span>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-5" style={{ margin: '1vh 0px', height: '60vh', display: 'flex', flexGrow: '1',marginTop:'0vh',padding:'0' }}>
                    <WebMapViewForRegionDash urlLayer={urlRegion} urlStreets={urlStreets}
                    defExpressRegion={defExpressRegion} height={"50vh"} width={"100%"} />
                  </div>

                  <div className='col-3' style={{ height: '60vh', display: 'flex', flexGrow: '1' ,padding:'0'}}>
                    <div className="card" style={{ height: '60vh', width: '100%', marginBottom: '0px' }}>
                      <div className="card-body" style={{ backgroundColor: "rgb(50, 59, 70)" }}>
                        <div className="d-flex">
                          <p className="d-flex flex-column" style={{ color: "white" }}>
                            <span className="text-bold text-lg" style={{ fontSize: "1.5rem" }}>Pavement Condition</span>
                          </p>

                        </div>
                        <HrBarChart regionsInPriority={regionsInPriority} handleClickOnHrChartInRegions={handleClickOnHrChartInRegions} />
                        <span className="mr-2" style={{ color: 'white',fontSize:'1.2rem' }}>
                          <i className="fas fa-square text-primary" /> This Year (2020)
                           </span>

                      </div>
                    </div >
                  </div>
                </div>


                <div className="col" style={{ display: 'flex' ,flexDirection: 'column', boxShadow:" 2px 2px 10px #DADADA", justifyContent: 'center', height: '30vh' ,padding:'0',marginBottom:'2rem'}}>


                  <ColumnChartRegion regionsInPriority={regionsInPriority} handleClickOnColChartInRegions={handleClickOnColChartInRegions} />
                </div>


              </div>

              <TableRegion AllRegions={regionsInPriority} />

              {/* <Summary /> */}
            </div>
          </div>
        </div>
      </main>

    </>
  );
};

export default CustomizedDashboardRegions;
