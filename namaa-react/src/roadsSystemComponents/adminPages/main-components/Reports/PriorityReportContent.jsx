//input "changeLayerInMap" from adminpages-like-page

import React,{useRef} from 'react' 
import '../../CSS files/reports-style.css'


import PriorityeReportMajor from './PriorityReport-Major';
import PriorityeReportRegion from './PriorityReport-Region';

const PriorityReportContent = (props) => {
  const { handleClickOnMajor, handleClickOnRegions,searchValue,
  handleOnChange,AllRoads,AllRegions,createAndDownloadPDF} =props;
    const PriorityMajorDiv=useRef();
    const PriorityRegionDiv=useRef();
    const PriorityMajorContentDiv=useRef();
    const PriorityRegionContentDiv=useRef();
  

    return ( 
       <div className="card card-primary card-tabs" style={{margin:"0px"}}>
  <div className="card-header p-0 pt-1">
    <ul className="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
      <li className="nav-item">
        <span className="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill" 
      role="tab" aria-controls="custom-tabs-one-home" aria-selected="true" ref={PriorityMajorDiv}
      onClick={()=>handleClickOnMajor(PriorityMajorDiv,PriorityMajorContentDiv,PriorityRegionDiv,PriorityRegionContentDiv)} >Major Roads</span>
      </li>
      <li className="nav-item">
        <span className="nav-link" id="custom-tabs-one-profile-tab" data-toggle="pill" 
        role="tab" aria-controls="custom-tabs-one-profile" aria-selected="false"  ref={PriorityRegionDiv} 
        onClick={()=>handleClickOnRegions(PriorityMajorDiv,PriorityMajorContentDiv,PriorityRegionDiv,PriorityRegionContentDiv)}>Regions & Streets</span>
      </li>
     
    </ul>
  </div>
  <div className="card-body">
    <div className="tab-content" id="custom-tabs-one-tabContent">
      <div className="tab-pane fade show active" id="custom-tabs-one-home" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab" ref={PriorityMajorContentDiv} >
        <PriorityeReportMajor searchValue={searchValue} handleOnChange={handleOnChange}
        AllRoads={AllRoads}
		createAndDownloadPDF={createAndDownloadPDF}
        />
      </div>
      <div className="tab-pane fade" id="custom-tabs-one-profile" role="tabpanel" aria-labelledby="custom-tabs-one-profile-tab"ref={PriorityRegionContentDiv}>
        <PriorityeReportRegion searchValue={searchValue} handleOnChange={handleOnChange}
        AllRegions={AllRegions}
		createAndDownloadPDF={createAndDownloadPDF}
        />
      </div>
   
    </div>
  </div>
</div>

     );
}
 
export default PriorityReportContent;