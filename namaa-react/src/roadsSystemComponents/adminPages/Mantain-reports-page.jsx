//input "changeLayerInMap" from adminpage-like-app

import React from 'react';

import './CSS files/Hala.css'

import WebMapView from './map-function-component';
import MainReportContent from './main-components/Reports/MainReportContent';

const MaintainReportPage = (props) => {
    
    const {urlLayer,handleClickOnMajor,handleClickOnRegions,
	searchValue,handleOnChange,AllRegions,AllRoads,createAndDownloadPDF} = props;
    console.log(props)
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
                color:"white",
                zIndex:'0'
              }}
            >
              &nbsp;--- Home / Maintenance Reports
          </div>
            <div className="info" >
              <div className="cont1" style={{ margin: "0 2rem" }}>
  
  
              <div className="card">
                <div className="card-header map-card-head" style={{fontSize:'2rem'}}>Maintenance Reports (Major Roads , Regions)</div>
                <div className="card-body  map-card-body" style={{padding:"0px"}}>
           <WebMapView  height={"50vh"} width={"100%"} urlLayer={urlLayer}
           definitionExpression={"roadId >0"}
           />
         
         </div>
            </div>
            <div className="card-body  map-card-body">
           <MainReportContent
            handleClickOnMajor={handleClickOnMajor}
            handleClickOnRegions={handleClickOnRegions} 
            searchValue={searchValue} 
            handleOnChange={handleOnChange} 
            AllRegions={AllRegions}
            AllRoads={AllRoads}
			createAndDownloadPDF={createAndDownloadPDF}
            />
        </div>
            </div>
          </div>
        </div>
      </div>
    </main>             
  
     );
}
 
export default MaintainReportPage;