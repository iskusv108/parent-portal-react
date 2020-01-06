import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import LoginStore from './components/login/LoginStore';
import MainLayout from './components/MainLayout';

const loginStore = new LoginStore();
class App extends Component {
  constructor(props) {
    super(props)
  }
  render(){
  	  return (
  	  	<Router>
	    	 <Switch>
                  <Route exact path="/login" render={(props) => <Login {...props} loginStore={loginStore}/>} />
                  <Route exact path="/" render={(props) => <MainLayout {...props} />} />
             </Switch>
	    </Router>
	  );
	}
}

export default App;
