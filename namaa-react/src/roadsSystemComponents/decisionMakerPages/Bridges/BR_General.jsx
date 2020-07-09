import React from 'react';
import { Fragment } from 'react';


import WebMapView from "../WebMapView" 

import BR_Table from '../majorRoads/BR_Table';

import "../Hala.css";



const BR_General = (props) => {
    return ( 

<Fragment>

            <main className="page-content">
                    <div className="container-fluid">

            <WebMapView ulrLayer={props.urlMajor}></WebMapView>

            <BR_Table data={props.data} handleClickCheckbox={props.handleClickCheckbox} ></BR_Table>


            </div>
            </main>


</Fragment>

     );
}
 
export default BR_General;