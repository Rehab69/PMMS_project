import React from 'react';
import {Link} from 'react-router-dom'

const DashboardBtn = (props) => {
    return (
        <div className="col"  style={{justifyContent: 'center',alignSelf: 'center', flexBasis:'100vh'}}>

        <div className="row" style={{ justifyContent: 'center', height: '20vh', margin: '10vh',top:'10vh' }}>

            <Link to="/dashboard/major" className="btn btn-outline-primary majordash-btn" style={{height:'fit-content',width:'20vw', marginRight:'1vw'}}>
            <p className="DashBtn" >Click Here to Display Major Roads Dashboard</p>
        </Link>
            <Link to="/dashboard/region" className="btn btn-outline-primary regiondash-btn" style={{height:'fit-content' ,width:'20vw',marginLeft:"2vw"}}>
              
               <p className="DashBtn"> Click Here to Display Major Roads Dashboard </p>
        </Link>
        </div>
        </div>
    );
}

export default DashboardBtn;