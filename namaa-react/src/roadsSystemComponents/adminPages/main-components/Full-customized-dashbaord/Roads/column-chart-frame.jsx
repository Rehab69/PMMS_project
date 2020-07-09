import React from 'react';

import ColumnChart from '../../../helpers/Roads/Column-Chart-majorRoads';


const ColumnChartAdmin = (props) => {
    const {roadAfterCalcUDI,handleClickOnColChartInRoads} =props;
    return (
         <div className="card" style={{width:'100%',marginBottom :'0px'}} >
            <div className="card-body" style={{backgroundColor:"rgb(50, 59, 70)"}}>
                <div className="d-flex">
                    <p className="d-flex flex-column" style={{color:"white"}}>
                        <span className="text-bold text-lg" style={{fontSize:"1.5rem"}}>Surveyed Major Roads</span>
                    </p>

                </div>
                <ColumnChart  roadAfterCalcUDI={roadAfterCalcUDI} handleClickOnColChartInRoads={handleClickOnColChartInRoads} />
                    <span className="mr-2" style={{color:'white',fontSize:'1.2rem'}}>
                        <i className="fas fa-square text-primary" />This Year (2020)
                           </span>

            </div>
        </div >
    );
}

export default ColumnChartAdmin;