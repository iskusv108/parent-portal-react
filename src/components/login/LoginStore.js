import React, { Component } from 'react';
import { extendObservable } from "mobx";
import Validator from 'validatorjs';
import cookie from 'react-cookies';

class LoginStore {
  constructor(props) {
    extendObservable(this, {
      email:"",
      password:"",
      errorMessage:'',
      isEmailError:false,
      emailIds:['parent1@gmail.com'],
      parentProps:{}

    });
  }
  /**
  * This method is called when there is a change in the fields(onchange event).
  * @param -field - {string}- this param contains the field name in which change occered 
  * @param -event- {js event object }- which contains user typed authentication number.
  */
  onFiledChange(field, event){
    switch(field){
      case 'email':
         this.email = event.target.value;
        break;
      case 'password':
        this.password = event.target.value;
        break;
      default:
        console.log("signup default");
    }
  }
  /**
  * This method is called when clicks on login button.
  */
  login(){
    this.errorMessage = "";
    var rules={
          emailId:'required|email',
          password:'required|min:8'
        };
    var data={
      emailId:this.email,
      password:this.password
    }
    var validation = new Validator(data, rules);
    if(validation.passes()){
      if(this.emailIds.indexOf(this.email) !== -1 && this.password === 'test1234'){
        this.parentProps.history.push('/');
        cookie.save("user",{'isLogin':true},{path:'/'});
      }else{
        this.errorMessage="Invalid email or password."
      }
    }else{
      this.errorMessage="Invalid email or password."
    }
    
  }
}

export default LoginStore;
