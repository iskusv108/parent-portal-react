import React from 'react';
import { extendObservable } from "mobx";


class HeaderStore {
  constructor(props) {
    extendObservable(this, {
      email:"",
    });
  }
  
}

export default HeaderStore;
