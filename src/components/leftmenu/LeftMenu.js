import React, { Component } from 'react';
import { observer } from 'mobx-react';

class LeftMenu extends Component {
  constructor(props) {
    super(props)
  }
  render(){
  	  return (
  	  	<div className="ISK-sidebar">
          <div className="ISK-sidebar__menuGroup">
            <ul>
              <li><span>Menu Item 1</span></li>
              <li><span>Menu Item 2</span></li>
              <li><span>Menu Item 3</span></li>
              <li><span>Menu Item 4</span></li>
              <li><span>Menu Item 5</span></li>
            </ul>
          </div>
        </div>
    
	  );
	}
}

export default observer(LeftMenu);
