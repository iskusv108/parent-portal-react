import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Route, Switch } from "react-router-dom";
import Header from './header/Header';
import LeftMenu from './leftmenu/LeftMenu';
import Dashboard from './dashboard/Dashboard';
import DashboardStore from './dashboard/DashboardStore';

const dashboardStore = new DashboardStore();

class MainLayout extends Component {
  constructor(props) {
    super(props)
  }
  render(){
  	  return (
        <div className="ISK">
         <Route render={(props) =>  <Header {...props}  />} />

          <div className="ISK-bodyContainer">
            <LeftMenu/>

            <div className="ISK-mainContent">
              <Route render={(props) =>  <Dashboard {...props} dashboardStore={dashboardStore} />} />
            </div>
          </div>
          <div className="ISK-footer">
            @Copyright 2020 ISK - All Rights Reserved.
          </div>

        </div>
    
	  );
	}
}

export default observer(MainLayout);;
