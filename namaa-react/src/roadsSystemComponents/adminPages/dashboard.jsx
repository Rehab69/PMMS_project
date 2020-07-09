import React, { Component } from 'react';
import { Route, Link ,Switch} from 'react-router-dom'

import './JS files/sidebar-script'
import './CSS files/sidebar-style.css'
import './CSS files/Dashboard/style-dashboard.css'
import './CSS files/map-style.css'
import './CSS files/adminlte.min.css'


import Sidebar from './sidebar';

import DashboardBtn from './main-components/Esri-dashbaords/dashboards-btn';
import MajorDashboard from './main-components/Esri-dashbaords/majorDashboard-comp';
import RegionDashboard from './main-components/Esri-dashbaords/regionDashboard-comp';

class Dashboard extends Component {
    state = {}

    render() {


        return (
            <>
                    <main className="page-content" id="page-content">
                        <div className="container-fluid">
                            <Switch>
                            <Route  path="/roadsSystem/admin/dashboard/major" component={MajorDashboard} />
                            <Route  path="/roadsSystem/admin/dashboard/region" component={RegionDashboard} />
                            <Route  path="/roadsSystem/admin/dashboard" component={DashboardBtn} />
                            </Switch>
                        </div>

                    </main>                
            </>
        );
    }
}

export default Dashboard;