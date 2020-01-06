import React from 'react';
import { extendObservable } from "mobx";

class LeftMenuStore {
  constructor(props) {
    extendObservable(this, {
      email:"",
    });
  }

}

export default LeftMenuStore;
