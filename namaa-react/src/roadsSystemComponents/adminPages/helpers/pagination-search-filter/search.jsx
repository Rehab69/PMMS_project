//onChange for search

import React from 'react';


const Search = (props) => {
    const {handleOnChange}=props
    return (
        <React.Fragment>
            {/* <div className="row" style={{width:"450px", margin:"auto"}}>
        <input className="form-control" placeholder="Search..."
            onChange={onChange}
        />
            </div>
            <div className="col-3">
        </div> */}

<div className="col" style={{display:'flex',justifyContent:'flex-end', margin:"0.5rem"}}>
<div className="search-box">
    <i className="material-icons"></i>
    <input className="form-control" style={{fontSize:'1.2rem'}} placeholder="Search..." 
            onChange={handleOnChange}
        />
</div>
</div>
        </React.Fragment>
        );
}

export default Search;
