import React from 'react';
import { extendObservable } from "mobx";

class DashboardStore {
  constructor(props) {
    extendObservable(this, {
      showFaculty:false,
      showSuccess:false
    });
  }
  hideFaculty(){
  	this.showFaculty = false;
  }
  showFacultyPopup(){
  	this.showFaculty = true;
  }
  registerClick(){
  	this.showSuccess = true;
  }
  registerAnother(){
  	this.showSuccess = false
  }
}

export default DashboardStore;
