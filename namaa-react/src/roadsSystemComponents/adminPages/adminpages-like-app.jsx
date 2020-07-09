import React,{Component} from 'react'
import {Route,Switch,Link} from 'react-router-dom'


import Sidebar from './sidebar'
import CustomizedDashboard from './CustomDashboard-Roads';

import MaintainReportPage from './Mantain-reports-page';
import PriorReportPage from './Prior-reports-page';

import CustomizedDashboardRegions from './CustomDashboard-regions';
import Home from './home-test';

import axios from 'axios'
import { saveAs } from 'file-saver'
import FullDashboard from './Summary-dashboard';

//3,5
class AdminLikeApp extends Component {
    state = { 
        activePage: 1,
        pageSize:5,
        activeFilter: 0,
        searchValue: "",
        urlLayer: "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/RegionsRoadsPrior/FeatureServer/0",
        urlRegion: "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/RegionsRoadsPrior/FeatureServer/1",
        urlRoads: "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/RegionsRoadsPrior/FeatureServer/0",
        urlStreets:  "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/MadinatyRoads/FeatureServer/0"
        ,defExpress:"",
        defExpressRegion:""
    }
     majorLayerInMap=()=>{
         this.resetSearchValue()

         if(this.state.urlLayer=== "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/RegionsRoadsPrior/FeatureServer/1"){
             this.setState({urlLayer: "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/RegionsRoadsPrior/FeatureServer/0"})
         }
     }
     regionsLayerInMap=()=>{
        this.resetSearchValue()

        if(this.state.urlLayer=== "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/RegionsRoadsPrior/FeatureServer/0"){
            this.setState({urlLayer: "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/RegionsRoadsPrior/FeatureServer/1"})
        }
    }
     resetLayerOnMap=()=>{
         this.resetSearchValue()
         if(this.state.urlLayer=== "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/RegionsRoadsPrior/FeatureServer/1"){
             this.setState({urlLayer: "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/RegionsRoadsPrior/FeatureServer/0"})
        
            }
        
     }
    //  {/*******   Fuctions to change layers in map with tables   *********** */}
      handleClickOnMajor=(PriorOrMaintainMR,PriorOrMaintainMRContent,PriorOrMaintainReg,PriorOrMaintainRegContent)=>{
        if(!PriorOrMaintainMR.current.classList.contains("active")){
       
                  PriorOrMaintainMR.current.classList.add("active")
                  PriorOrMaintainMR.current.attributes["aria-selected"].nodeValue=true
                  PriorOrMaintainMRContent.current.classList.add("active")
                  PriorOrMaintainMRContent.current.classList.add("show")
                  PriorOrMaintainReg.current.classList.remove("active")
                  PriorOrMaintainReg.current.attributes["aria-selected"].nodeValue=false
                  PriorOrMaintainRegContent.current.classList.remove("active")
                  PriorOrMaintainRegContent.current.classList.remove("show")
                  this.majorLayerInMap()
              }
  }
   handleClickOnRegions = (PriorOrMaintainMR,PriorOrMaintainMRContent,PriorOrMaintainReg,PriorOrMaintainRegContent)=>{
    if(!PriorOrMaintainReg.current.classList.contains("active")){
       
      PriorOrMaintainReg.current.classList.add("active")
      PriorOrMaintainReg.current.attributes["aria-selected"].nodeValue=true
      PriorOrMaintainRegContent.current.classList.add("active")
      PriorOrMaintainRegContent.current.classList.add("show")
      PriorOrMaintainMR.current.classList.remove("active")
      PriorOrMaintainMR.current.attributes["aria-selected"].nodeValue=false
      PriorOrMaintainMRContent.current.classList.remove("active")
      PriorOrMaintainMRContent.current.classList.remove("show")
      this.regionsLayerInMap();
  }
  }
//   {/********************************************** */}
     //for onchange search
     handleOnChange = (searchValue) => {
        this.setState({ searchValue: searchValue.target.value.toLowerCase()})

     }
     resetSearchValue=()=>{
         this.setState({searchValue:""})
     }
     handlePagination = (e) => {
        //clone
        let activePage = { ...this.state.activePage }
        //edit
        activePage = e;
        //set state
        this.setState({ activePage: activePage })
    }
	
	createAndDownloadPDF =(data,nameOfReport)=>{
		 if(nameOfReport==="Maintenance Report Of Major Roads"){
			 axios.post('http://localhost:5000/create-MMR',data)
        .then(()=>axios.get('http://localhost:5000/MMR-pdf',{responseType:'blob'}))
        .then((res)=>{
            const pdfBlob = new Blob([res.data],{type:'application/pdf'})
            saveAs(pdfBlob,'Maintenance Report Of Major Roads.pdf');
            
        })}
		else if(nameOfReport==="Maintenance Report Of Regions"){
			axios.post('http://localhost:5000/create-MReg',data)
			.then(()=>axios.get('http://localhost:5000/MReg-pdf',{responseType:'blob'}))
        .then((res)=>{
            const pdfBlob = new Blob([res.data],{type:'application/pdf'})
            saveAs(pdfBlob,'Maintenance-reports-Regions.pdf');
            
        })
		}
		else if(nameOfReport==="Priority Report Of Major Roads"){
				axios.post('http://localhost:5000/create-PMR',data)
			.then(()=>axios.get('http://localhost:5000/PMR-pdf',{responseType:'blob'}))
        .then((res)=>{
            const pdfBlob = new Blob([res.data],{type:'application/pdf'})
            saveAs(pdfBlob,'Priority-reports-Major-Roads.pdf');
            
        })
		}else if(nameOfReport==="Priority Report Of Regions")
		{
				axios.post('http://localhost:5000/create-PReg',data)
			.then(()=>axios.get('http://localhost:5000/PReg-pdf',{responseType:'blob'}))
        .then((res)=>{
            const pdfBlob = new Blob([res.data],{type:'application/pdf'})
            saveAs(pdfBlob,'Priority-reports-Regions.pdf');
            
        })
		}
        
    }
    
     //interaction with map
     handleClickOnHrChartInRoads=(name)=>{
        if(this.state.defExpress&&this.state.defExpress.split('=')[1].split("'")[1]===name){
            this.setState({defExpress:""})
        }else{

            this.setState({defExpress:`pavment_codition='${name}'`})
        }
    }

    handleClickOnColChartInRoads=(name)=>{
        if(this.state.defExpress&&this.state.defExpress.split('=')[1].split("'")[1]===name){
            this.setState({defExpress:""})
        }else{

            this.setState({defExpress:`roadName='${name}'`})
        }
    }

    //Regions
    handleClickOnHrChartInRegions=(name)=>{
        if(this.state.defExpressRegion&&this.state.defExpressRegion.split('=')[1].split("'")[1]===name){
            this.setState({defExpressRegion:""})
        }else{

            this.setState({defExpressRegion:`pavment_condition='${name}'`})
        }
    }

    handleClickOnColChartInRegions=(name)=>{
        if(this.state.defExpressRegion&&this.state.defExpressRegion.split('=')[1].split("'")[1]===name){
            this.setState({defExpressRegion:""})
        }else{

            this.setState({defExpressRegion:`RegionName='${name}'`})
        }
    }

    render() { 
  
        return ( 
            <>

            {/******* Side bar *********/}
              <div className="page-wrapper chiller-theme toggled" >
                    <Link id="show-sidebar" className="btn btn-sm btn-dark" to="#">
                    <i className="fas fa-angle-double-right" style={{fontSize:'2rem'}} />
                    </Link>

                    <Sidebar props={this.props} resetLayerOnMap={this.resetLayerOnMap} urlLayer={this.state.urlLayer}
                    searchValue={this.state.searchValue}
                    resetSearchValue = {this.resetSearchValue}
                    fakeAuth={this.props.fakeAuth}
                    />
            {/****************** */}
        <Switch>

            {/********   Dashboard of Esri  ******/}
            {/* <Route path="/RMS/admin/dashboard" component={Dashboard}/> */}
           
            {/********  Customized Dashboard  ******/}
            <Route path="/RMS/DMaker/dashboard/roads" 
            render={(props)=>
            
            <CustomizedDashboard {...props} 
            urlRoads={this.state.urlRoads}
            defExpress={this.state.defExpress}
            handleClickOnHrChartInRoads={this.handleClickOnHrChartInRoads}
            handleClickOnColChartInRoads={this.handleClickOnColChartInRoads}
            roadAfterCalcUDI={this.props.roadAfterCalcUDI}
            roadInPriority={this.props.roadAfterDeterminePriority}
            />
        }/>

           <Route path="/RMS/DMaker/dashboard/Regions" 
            render={(props)=>
            
            <CustomizedDashboardRegions {...props} 
            urlRegion={this.state.urlRegion}
            urlStreets={this.state.urlStreets}
            regionsAfterCalcUDI = {this.props.regionsAfterCalcUDI}
            regionsInPriority={this.props.regionsAfterDeterminePriority}
            defExpressRegion={this.state.defExpressRegion}
            handleClickOnColChartInRegions={this.handleClickOnColChartInRegions}
            handleClickOnHrChartInRegions={this.handleClickOnHrChartInRegions}
            />
        }/>
            
         <Route path="/RMS/DMaker/dashboard/summary" 
         render={(props)=>
            <FullDashboard {...props} 
            urlRoads={this.state.urlRoads}
            urlRegion={this.state.urlRegion}
            urlStreets={this.state.urlStreets}
            regionsAfterCalcUDI = {this.props.regionsAfterCalcUDI}
            regionsInPriority={this.props.regionsAfterDeterminePriority}
            roadAfterCalcUDI={this.props.roadAfterCalcUDI}
            roadInPriority={this.props.roadAfterDeterminePriority}
            streets={this.props.streets}
            />
        } />

            {/**********    Reports Pages  *********** */}
            {/**********    1. Maintenance Report page  *********** */}

            <Route path="/RMS/DMaker/maintReport" render={(props)=>
            <MaintainReportPage  {...props}
            urlLayer={this.state.urlLayer}

            handleClickOnMajor={this.handleClickOnMajor}
            handleClickOnRegions={this.handleClickOnRegions}
            searchValue={this.state.searchValue}
            handleOnChange={this.handleOnChange}
            AllRoads={this.props.roadAfterDeterminePriority}
            AllRegions={this.props.regionsAfterDeterminePriority}
			createAndDownloadPDF={this.createAndDownloadPDF}
            />
            } />

            {/**********    2. Priority Report page  *********** */}
            
            <Route path="/RMS/DMaker/PriorReport" render={(props)=>
            <PriorReportPage {...props}
            urlLayer={this.state.urlLayer} 

            handleClickOnMajor={this.handleClickOnMajor}
            handleClickOnRegions={this.handleClickOnRegions}
            searchValue={this.state.searchValue}
            handleOnChange={this.handleOnChange}
            AllRoads={this.props.roadAfterDeterminePriority}
            AllRegions={this.props.regionsAfterDeterminePriority}
			createAndDownloadPDF={this.createAndDownloadPDF}
            />
            } />




<Route path="/RMS/DMaker" component={Home}/>

           
     
        </Switch>
       

        </div>
        
            </>
         );
    }
}
 
export default AdminLikeApp;