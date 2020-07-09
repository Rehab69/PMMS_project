//input "resetLayerOnMap" from adminpage-like-app


import React from 'react';
import {Link} from 'react-router-dom'

const Sidebar = (props) => {



    return ( 
      
       
      <nav id="sidebar" className="sidebar-wrapper" style={{width:"17vw"}}>
      <div className="sidebar-content">
        <div className="sidebar-brand">
          <Link to="#">Home</Link>
          <div id="close-sidebar">
          <i className="fas fa-angle-double-left" />
          </div>
        </div>
        <div className="sidebar-header">
          <div className="user-pic">
            <img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="User"></img>
          </div>
          <div className="user-info">
            <span className="user-role">User Manager</span>
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
                
               
               
                  
               
                      <li  >
                      
                       <Link to="/RMS/UserManager/manageusers">
                         <i className="fas fa-user-cog"></i>
                      
                         Manage Users</Link>
                      </li>
                      <li>
                      
                       <Link to="/RMS/UserManager/users">
                       <i className="fas fa-users"></i>
                         System Users</Link>
                      </li>
               
                  
             
              
              </ul>
            </div>
  
          </div>
  
          <div className="sidebar-footer">
     
          <a href="/">
            <i className="fa fa-power-off" /> <span>Sign out</span>
          </a>
          </div>
        </nav>
  
       
      
  
      
     );
}
 
export default Sidebar;