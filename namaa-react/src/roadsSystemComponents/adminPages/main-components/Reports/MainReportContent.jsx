//input "changeLayerInMap" from adminpages-like-page


import React, { useRef } from 'react'

import '../../CSS files/reports-style.css'

import MaintenanceReportRegions from './MaintenanceReport-Regions';
import MaintenanceReportMajor from './MaintenanceReport-Major';

const MainReportContent = (props) => {
  const { handleClickOnRegions, handleClickOnMajor, searchValue, 
  handleOnChange, AllRoads, AllRegions,createAndDownloadPDF } = props;
  const MaintainMajorDiv = useRef();
  const MaintainRegionDiv = useRef();
  const MaintainMajorContentDiv = useRef();
  const MaintainRegionContentDiv = useRef();

  // console.log(AllRegions)
  // console.log(AllRoads)

  // if(MaintainMajorDiv.current.classList.contains("active")&&urlLayer==="https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/MadinatyRoads/FeatureServer/5"){
  //   changeLayerInMap()
  // }
  return (
    <div className="card card-primary card-tabs" style={{ margin: "0px" }}>
      <div className="card-header p-0 pt-1">
        <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
          <li className="nav-item">
            <span className="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill"
              role="tab" aria-controls="custom-tabs-one-home" aria-selected="true" ref={MaintainMajorDiv}
              onClick={() => handleClickOnMajor(MaintainMajorDiv, MaintainMajorContentDiv, MaintainRegionDiv, MaintainRegionContentDiv)}>
              Major Roads</span>
          </li>
          <li className="nav-item">
            <span className="nav-link" id="custom-tabs-one-profile-tab" data-toggle="pill"
              role="tab" aria-controls="custom-tabs-one-profile" aria-selected="false" ref={MaintainRegionDiv}
              onClick={() => handleClickOnRegions(MaintainMajorDiv, MaintainMajorContentDiv, MaintainRegionDiv, MaintainRegionContentDiv)}
            >Regions & Streets</span>
          </li>

        </ul>
      </div>
      <div className="card-body">
        <div className="tab-content" id="custom-tabs-one-tabContent">
          <div className="tab-pane fade show active" id="custom-tabs-one-home" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab" ref={MaintainMajorContentDiv} >
            <MaintenanceReportMajor searchValue={searchValue} handleOnChange={handleOnChange}
              AllRoads={AllRoads}
			  createAndDownloadPDF={createAndDownloadPDF}
            />
          </div>
          <div className="tab-pane fade" id="custom-tabs-one-profile" role="tabpanel" aria-labelledby="custom-tabs-one-profile-tab" ref={MaintainRegionContentDiv}>
            <MaintenanceReportRegions searchValue={searchValue} handleOnChange={handleOnChange}
              AllRegions={AllRegions}
			  createAndDownloadPDF={createAndDownloadPDF}
            />
          </div>

        </div>
      </div>
    </div>

  );
}

export default MainReportContent;