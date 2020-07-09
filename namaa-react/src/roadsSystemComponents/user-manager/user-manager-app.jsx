import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import Sidebar from './sidebar';
import UsersPage from './users-in-system-page';
import ManageUsersPage from './manage-users-page';





//LifeCycle Hooks
class UserManager extends Component {
state={
  activePage: 1,
  pageSize:5,
  activeFilter: 0,
  searchValue: ""
}
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

  render() {
    return (
      <div>
        <div className="page-wrapper chiller-theme toggled">
          <Sidebar></Sidebar>

          <Switch>
            {/* first page  */}
            <Route path="/RMS/userManager/users" render={(props) =>
              <UsersPage  {...props} 
              Allusers={this.props.Allusers}
              handleOnChange={this.handleOnChange}
              searchValue={this.state.searchValue} 
              pageSize={this.state.pageSize}
              activePage={this.state.activePage}
              
              />

            } />
            {/* second page */}

            <Route path="/RMS/userManager/manageusers" render={(props) =>
              <ManageUsersPage {...props}
              handleOnChange={this.handleOnChange}
              searchValue={this.state.searchValue} 
              pageSize={this.state.pageSize}
              activePage={this.state.activePage}
              Allusers={this.props.Allusers}
              />
            }
            />
         
        
          </Switch>
        </div>
      </div>
    );
  }
}

export default UserManager;