//input "resetLayerOnMap" from DMakerpage-like-app


import React,{useRef} from 'react';
import {Link} from 'react-router-dom'

const Sidebar = (props) => {
  const {resetLayerOnMap,searchValue,resetSearchValue} = props
  const dashboardListRef = useRef();
  const reportsListRef = useRef();
    const dashboardSidebarRef = useRef();
  const reportsSidebarRef = useRef();


    return ( 
      
        <nav id="sidebar" className="sidebar-wrapper" style={{width:"18vw"}}>
          <div className="sidebar-content">
            <div className="sidebar-brand">
              <Link to="/RMS/DMaker/">Home</Link>
              <div id="close-sidebar">
              <i className="fas fa-angle-double-left" />
              </div>
            </div>
            <div className="sidebar-header">
              <div className="user-pic">
                <img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="User"></img>
              </div>
              <div className="user-info">
                <span className="user-role">Decision Maker</span>
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
                <li className="sidebar-dropdown" ref={dashboardListRef}>
                <span className="heaerMenu" onClick={()=>{
                   if(dashboardListRef.current.classList[1]==="active"){
                    dashboardListRef.current.classList.remove("active")
                    dashboardSidebarRef.current.style.display=""
                   }else{
                    dashboardListRef.current.classList.add("active")
                    dashboardSidebarRef.current.style.display="block"
                    reportsSidebarRef.current.style.display=""
                   }
                  
                 }}>
                    <i className="fa fa-tachometer-alt" />
                    <span>Dashboard</span>                   
                  </span>
                  <div className="sidebar-submenu" ref={dashboardSidebarRef}>
                    <ul>
                      <li >
                        <Link to="/RMS/DMaker/dashboard/roads" style={{paddingRight:"0px"}}
                        onClick={props.props.location.pathname==="/RMS/DMaker/dashboard/roads"? null: searchValue!==""? resetSearchValue:null}
                        >Dashboard of Roads</Link>
                      </li>
                         <li >
                        <Link to="/RMS/DMaker/dashboard/Regions" style={{paddingRight:"0px"}}
                        onClick={props.props.location.pathname==="/RMS/DMaker/dashboard/Regions"? null: searchValue!==""? resetSearchValue:null}
                        >Dashboard of Regions</Link>
                         <Link to="/RMS/DMaker/dashboard/summary" style={{paddingRight:"0px"}}
                        onClick={props.props.location.pathname==="/RMS/DMaker/dashboard/summary"? null: searchValue!==""? resetSearchValue:null}
                        >Summary Dashboard for Assets</Link>
                      </li>
                    </ul>
                  </div>
                </li>
             
                <li className="sidebar-dropdown" ref={reportsListRef}>
                 <span className="heaerMenu" onClick={()=>{
                   if(reportsListRef.current.classList[1]==="active"){
                    reportsListRef.current.classList.remove("active")
                    reportsSidebarRef.current.style.display=""

                   }else{
                    reportsListRef.current.classList.add("active")
                    reportsSidebarRef.current.style.display="block"
                    dashboardSidebarRef.current.style.display=""
                   }
                  
                 }}>
                    <i className="far fa-map" />
                    <span>Reports</span>
                  </span>
                  <div className="sidebar-submenu" ref={reportsSidebarRef}>
                    <ul>
                      <li 
                      onClick={ 
                       props.props.location.pathname==="/RMS/DMaker/maintReport"? null : resetLayerOnMap  
                       }
                        >
                       <Link to="/RMS/DMaker/maintReport" style={{paddingRight:'0'}}>Maintenance Report</Link>
                      </li>
                      <li
                      onClick={ 
                        props.props.location.pathname==="/RMS/DMaker/PriorReport"? null : resetLayerOnMap 
                       }
                       
                      >
                       <Link to="/RMS/DMaker/PriorReport" >Priority Report</Link>
                      </li>
                    </ul>
                  </div>
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