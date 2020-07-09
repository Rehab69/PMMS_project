import React, { Fragment } from "react";
import {Link} from 'react-router-dom'
import UdiRoutRap from "./Udi_rout_map";
import RoutTable from './RoutTble';

const Udi_rout=(props)=>{
 
  const {MRoads,urlMajor} = props;
  console.log(props)
    return (
      <Fragment>
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
            &nbsp;--- Home / Major Roads / Surveyed Roads
        </div>
          <div className="info" >
            <div className="cont1" style={{ margin: "0 2rem" }}>


              <div className="card">
                <div className="card-header map-card-head" style={{fontSize:'2rem',fontWeight:'700'}}>Major Roads</div>
                <div className="card-body  map-card-body">
              <UdiRoutRap urlMajor={urlMajor} />
              </div>
            </div>
            <div className="card">
              <div className="card-header map-card-head" style={{fontSize:'1.4rem',fontWeight:'700'}}>Surveyed Major Roads</div>

              <div className="card-body  map-card-body">
              <RoutTable MRoads={MRoads}  handleClickCheckbox={props.handleClickCheckbox}></RoutTable>
              </div>
			     <Link to="/RMS/Analyst/MRcondition">
              <button className='btn btn-info btn-lg' style={{float:"right",marginRight:150}}>Calculate UDI</button>
              </Link>
            </div>
          </div>
         
        </div>
      </div>
      </div>
      </main>
      </Fragment>
    );
  }

export default Udi_rout;
