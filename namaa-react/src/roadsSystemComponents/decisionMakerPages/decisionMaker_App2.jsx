import React, { Component } from "react";

import { Route, Switch} from "react-router-dom";


import BR_Maintenance from "../decisionMakerPages/Bridges/BR_Maintenance";


import Sidebar from '../decisionMakerPages/SideBar/sidebar';

import axios from 'axios'; 


import BR_General from "./Bridges/BR_General";


//LifeCycle Hooks
class decisionMaker_App2 extends Component {
  
    
      state= {
            data: [
              { id: 1, name: "Burger", price: 30, count: 0, inPriority: false },
              { id: 2, name: "Fries", price: 20, count: 0, inPriority: false },
              { id: 3, name: "Cola", price: 10, count: 0, inPriority: false },
        { id: 4, name: "fsdfsdfsdf", price: 10, count: 0, inPriority: true }

            ],
            urlBridge: "https://services.arcgis.com/Lob4uxfVT5t0AXMF/arcgis/rest/services/MadinatyRoads/FeatureServer/3",
           
        }
       
        // componentDidMount()
        //     {   
        //         axios
        //         .get("https://jsonplaceholder.typicode.com/Posts")
        //         .then(res => {
        //             console.log(res);
        //             this.setState({data : res.data});
        //         })
        //         .catch(function(error) {
        //             console.log(error);
        //         });
        //     }

           
            handleClickCheckbox(route){
              // const newData = [...this.state.data];
              // //Using object ==> index
              // const index = newData.indexOf(route);
              // //Deep Clone 
              // newData[index] = { ...newData[index] };
              // //Edit
              // newData[index].inPriority = !newData[index].inPriority;
              // //Set State
              // this.setState({ data:newData });
              console.log(this.state)
            }




  
  render() {
    return (
      <div>
        <div className="page-wrapper chiller-theme toggled">
        <Sidebar></Sidebar>

    <Switch>

{/* first page  */}


<Route path="/RSystem/DMaker/BRGeneral"  render={(props) => 
        
        <BR_General  {...props} data= {this.state.data} handleClickCheckbox={this.handleClickCheckbox}  urlMajor={this.state.urlBridge} />  
        
        }  />


{/* second page */}

        <Route path="/RSystem/DMaker/BRMaintenance" component={BR_Maintenance} /> 



    
        </Switch>     
        </div>                    
      </div>
    );
  }
}

export default decisionMaker_App2;












// componentWillMount()
//     {   
//         axios
//         .get("https://jsonplaceholder.typicode.com/Posts")
//         .then(function(response) {
//             this.setState({Posts : response.data[0].title});
//         })
//         .catch(function(error) {
//             console.log(error);
//         });
//     }