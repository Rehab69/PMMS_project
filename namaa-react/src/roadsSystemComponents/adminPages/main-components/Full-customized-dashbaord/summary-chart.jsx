import React from 'react';
import {Link} from 'react-router-dom';
import PieChart from '../../helpers/PieChart-component'


const Summary = (props) => {
    return ( 
        
        <div className="card">
        <div className="card-header border-0">
            <div className="d-flex justify-content-between">
                <h3 className="card-title">Summary</h3>
                <Link to="#">View Report</Link>
            </div>
        </div>
        <div className="card-body">
            <div className="d-flex">
               
            </div>
            <PieChart/>
            <div className="d-flex flex-row justify-content-end">
                <span className="mr-2" style={{color:'white',fontSize:'1rem'}}>
                    <i className="fas fa-square text-primary" /> This year
</span>
                {/* <span>
                    <i className="fas fa-square text-gray" /> Last year
</span> */}
            </div>
        </div>
    </div>
     );
}
 
export default Summary;