import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {DropdownButton, Dropdown } from "react-bootstrap";
import cookie from 'react-cookies';

class Header extends Component {
  constructor(props) {
    super(props)
  }
  logout(){
      cookie.remove('user',{ path: '/' });
      this.props.history.push('/login')
  }
  render(){
  	  return (
  	  	<header className="ISK-header">
            <div className="ISK-header__left">
              <a href="#">
                <img src="images/logo.png" alt="Logo"/>
              </a>
            </div>
            <div className="ISK-header__right">
              <div className="ISK-header-userProfile"> 
                <DropdownButton variant="default" className="userDropDown" title={<img src="images/user1.jpg" alt="User"/>}>
                  <Dropdown.Item onClick={this.logout.bind(this)}>Logout</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </header>
    
	  );
	}
}

export default observer(Header);;
