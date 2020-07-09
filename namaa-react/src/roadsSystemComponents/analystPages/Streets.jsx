import React, { Fragment } from "react";
import Map_streets from "./Map_streets";
import Minor_table from "./Minor_table";

const Streets=()=>{
    return(
<main className="page-content">
          <div className="container-fluid">
          <br></br>
          <br></br>
          <br>
          </br>
              <Map_streets></Map_streets>
              <br></br>
              <br></br>
              <Minor_table></Minor_table>
          </div>
          <button className="btn btn-info udi">Calculate GI</button>
<br></br>
<br></br>
<br></br>
          </main>
    )
          }

          export default Streets;