import React from 'react';



import MaintenanceTable from "../Bridges/MaintenanceTable"

import WebMapView from "../WebMapView"

export const BR_Maintenance = (props) =>{


    return (
      <>



<main className="page-content">
          <div className="container-fluid">
      


<WebMapView></WebMapView>


<MaintenanceTable></MaintenanceTable>


</div>
        </main>

      </>
    )




};

export default BR_Maintenance ;
