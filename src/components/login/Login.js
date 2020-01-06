import React, { Component } from 'react';
import { observer } from 'mobx-react';
import cookie from 'react-cookies';

class Login extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){
    this.props.loginStore.parentProps= this.props;
    this.props.loginStore.email="";
    this.props.loginStore.password="";
    var userInfo = cookie.load('user');
    if(userInfo && userInfo.isLogin){
      this.props.history.push("/")
    }
  }
  render(){
    const {loginStore} = this.props;
  	  return (
  	  	<div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
             
                <span className="login100-form-title p-b-26">
                  Welcome
                </span>
                <span className="login100-form-title p-b-30">
                  <img src="images/logo.png" />
                </span>

                <div className="wrap-input100 validate-input">
                    {/*<span className="focus-input100" data-placeholder="Email"></span>*/}
                  <input className="input100" type="text" placeholder="Email" value={loginStore.email} name="email" onChange={loginStore.onFiledChange.bind(loginStore, 'email')} />
                  
                </div>

                <div className="wrap-input100 validate-input" data-validate="Enter password">
                  <span className="btn-show-pass">
                    <i className="zmdi zmdi-eye"></i>
                  </span>
                  <input className="input100" type="password" placeholder="Password" name="pass" name="email" onChange={loginStore.onFiledChange.bind(loginStore, 'password')}/>
                  {/*<span className="focus-input100" data-placeholder="Password"></span>*/}
                </div>

                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn"></div>
                    
                      <button className="login100-form-btn" onClick={loginStore.login.bind(loginStore)}>
                        Login
                      </button>
                  </div>
                  <div className="errorTxt">{loginStore.errorMessage}</div>
                </div>

                <div className="text-center p-t-30">
                  <span className="txt1">
                    Don’t have an account?
                  </span>

                  <a className="txt2" href="#">
                    Sign Up
                  </a>
                </div>
              
            </div>
          </div>
        </div>
    
	  );
	}
}

export default observer(Login);;
