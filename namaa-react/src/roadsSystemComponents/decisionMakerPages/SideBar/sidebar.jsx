import React, { Fragment,useRef } from "react";
import {Link} from 'react-router-dom'

import '../SideBar/sidebar-style.css'

const Sidebar = (props) => {
const majorRef = useRef()
const majorSubmenuRef = useRef()
const regionRef = useRef()
const regionSubmenuRef = useRef()
  return (
    <Fragment>
    
        <span  id="show-sidebar" className="btn btn-sm btn-dark">
        <i className="fas fa-angle-double-right" style={{fontSize:'2rem'}} />
        </span>
        <nav id="sidebar" className="sidebar-wrapper"  style={{width:"18vw"}}>
          <div className="sidebar-content">
            <div className="sidebar-brand">

              <Link to="/RMS/Manager">Home</Link>
              <div id="close-sidebar">
              <i className="fas fa-angle-double-left" />
              </div>
            </div>
            <div className="sidebar-header">
              <div className="user-pic">
                <img
                  className="img-responsive img-rounded"
                  src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                  alt="User picture"
                />
              </div>
              <div className="user-info">
                <span className="user-role">Manager</span>
                <span className="user-status">
                  <i className="fa fa-circle" />
                  <span>Online</span>
                </span>
              </div>
            </div>
            

            <div className="sidebar-menu">
              <ul>
                <li className="header-menu">
                  <span>General</span>
                </li>


                <li className="sidebar-dropdown" ref={majorRef} >
                  <span className="heaerMenu" 
                  onClick={()=>{
                    if(majorRef.current.classList[1]==="active"){
                     majorRef.current.classList.remove("active")
                     majorSubmenuRef.current.style.display=""
 
                    }else{
                     majorRef.current.classList.add("active")
                     majorSubmenuRef.current.style.display="block"
                     regionSubmenuRef.current.style.display=""
 
                    }
                   
                  }}
                  >

                  <i className="fa fa-road"/>

                    <span>Major Roads</span>
                  </span>

                  
                  <div className="sidebar-submenu" ref={majorSubmenuRef}>
                    <ul>
                      <li>
                        <Link to="/RMS/Manager/MRGeneral">
                          Display all Roads
                         
                        </Link>
                      </li>
                      <li>
                        <Link to="/RMS/Manager/MRMaintenance" style={{paddingRight:'0px'}}>Maintenance procedures</Link>
                      </li>
                  
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown" ref={regionRef}>
                  <span className="heaerMenu" 
                  onClick={()=>{
                    if(regionRef.current.classList[1]==="active"){
                     regionRef.current.classList.remove("active")
                     regionSubmenuRef.current.style.display=""
 
                    }else{
                     regionRef.current.classList.add("active")
                     regionSubmenuRef.current.style.display="block"
                     majorSubmenuRef.current.style.display=""
 
                    }
                   
                  }}
                  >
                     <i className="fas fa-city" />

                    <span>Regions</span>
                  </span>
                  <div className="sidebar-submenu" ref={regionSubmenuRef}>
                    <ul>
                      <li>
                        <Link to="/RMS/Manager/RgGeneral"> Display all Regions</Link>
                      </li>
                      <li>
                        <Link to="/RMS/Manager/RGMaintenance"  style={{paddingRight:'0px'}}>Maintenance procedures</Link>
                      </li>
                     
                    </ul>
                  </div>
                </li>
           
             
              </ul>
            </div>
          </div>
          <div className="sidebar-footer">
          <a href="/" >
              <i className="fa fa-power-off" /> <span>Sign out</span>
            </a> 
          </div>
        </nav>


      
        
    </Fragment>
  );
};

export default Sidebar;
