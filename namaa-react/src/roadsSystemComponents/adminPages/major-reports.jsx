import React from 'react';
import ReportTable from './../some-components/Report-in-table';


const MajorReports = (props) => {
   
    const headOfTable = ["#"
    , "Roud Name"
    ,"City" 
    ,"Pavement Condition" 
    , "UDI"
    , "Cost of maintenance" 
    , "Maintenance Duration" 
    , "Road Length"
    , "No. of Sections"
    ,"No. of Intersections"]
      const dataOfTable = [{
          no:1,name:"road1",city:"Geddah",condition:"Poor",PCI:30,MaintenenceCost:12000000,MaintainDuration:365, length:50000,noSections:30,noIntersec:50
      },{
        no:2,name:"road1",city:"Geddah",condition:"Poor",PCI:30,MaintenenceCost:12000000,MaintainDuration:365, length:50000,noSections:30,noIntersec:50
      },{
        no:3,name:"road3",city:"Geddah",condition:"Poor",PCI:30,MaintenenceCost:12000000,MaintainDuration:365, length:50000,noSections:30,noIntersec:50
      },{
        no:4,name:"road4",city:"Geddah",condition:"Poor",PCI:30,MaintenenceCost:12000000,MaintainDuration:365, length:50000,noSections:30,noIntersec:50
      }
      ,{
        no:5,name:"road5",city:"Geddah",condition:"Poor",PCI:30,MaintenenceCost:12000000,MaintainDuration:365, length:50000,noSections:30,noIntersec:50
      },{
        no:6,name:"road6",city:"Geddah",condition:"Poor",PCI:30,MaintenenceCost:12000000,MaintainDuration:365, length:50000,noSections:30,noIntersec:50
      }
      ,{
        no:7,name:"road7",city:"Geddah",condition:"Poor",PCI:30,MaintenenceCost:12000000,MaintainDuration:365, length:50000,noSections:30,noIntersec:50
      }
      ,{
        no:8,name:"road8",city:"Geddah",condition:"Poor",PCI:30,MaintenenceCost:12000000,MaintainDuration:365, length:50000,noSections:30,noIntersec:50
      }
    ]
    return ( 
        <>

<div>
    <h1>Major Roads Report</h1>
<ReportTable
 headOfTable={headOfTable}
 dataOfTable={dataOfTable}
/>
</div>
</>
     );
}
 
export default MajorReports;