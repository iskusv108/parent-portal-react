import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Modal } from "react-bootstrap";
import cookie from 'react-cookies';

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){
    var userInfo = cookie.load('user');
    if(!userInfo || !userInfo.isLogin){
      this.props.history.push("/login")
    }
  }
  render(){
    const {dashboardStore} = this.props;
  	  return (
  	  	<>{!dashboardStore.showSuccess?<>
          <div className="ISK-welcomeText m-b-20">
            <h3 className="ISK-welcomeText-title">Hello...</h3>
            You have reached Open House class finder! Here you can explore all the information you need to
            successfully schedule a demo class for your chid.You can scroll to view the different subjects you
            requested and view class timings. Click on timing to schedule a free demo class !
            <br/><br/>
            --Register to the learning begin! 
          </div>

          <div className="row">
            <div className="col-3">
              <div className="ISK-panel">
                <div className="ISK-pane__header">
                  Computer Science
                </div>
                <div className="ISK-pane__body">
                  <div className="ISK-listItem" >
                    <input type="radio" name="cs_timing" onClick={dashboardStore.showFacultyPopup.bind(dashboardStore)}/>
                    <label>Tue, 09:00 AM - 09:30 AM</label>
                  </div>
                  <div className="ISK-listItem">
                    <input  type="radio" name="cs_timing" onClick={dashboardStore.showFacultyPopup.bind(dashboardStore)}/>
                    <label>Tue, 09:30 AM - 10:00 AM</label>
                  </div>
                  <div className="ISK-listItem">
                    <input type="radio" name="cs_timing" onClick={dashboardStore.showFacultyPopup.bind(dashboardStore)}/>
                    <label>Tue, 10:00 AM - 10:30 AM</label>
                  </div>
                  <div className="ISK-listItem">
                    <input type="radio" name="cs_timing" onClick={dashboardStore.showFacultyPopup.bind(dashboardStore)}/>
                    <label>Tue, 10:30 AM - 11:00 AM</label>
                  </div>
                </div>
                <div className="ISK-pane__footer">
                  <i className="fa fa-money p-r-8" aria-hidden="true"></i>Fee for the classes is Rs. 3000/-
                </div>
              </div>
            </div>
            
            <div className="col-3">
              <div className="ISK-panel">
                <div className="ISK-pane__header">
                  Mathematics
                </div>
                <div className="ISK-pane__body">
                  <div className="ISK-listItem">
                    <input type="radio" name="mat_timing" onClick={dashboardStore.showFacultyPopup.bind(dashboardStore)}/>
                    <label>Tue, 09:00 AM - 09:30 AM</label>
                  </div>
                  <div className="ISK-listItem">
                    <input type="radio" name="mat_timing" onClick={dashboardStore.showFacultyPopup.bind(dashboardStore)}/>
                    <label>Tue, 09:30 AM - 10:00 AM</label>
                  </div>
                  <div className="ISK-listItem">
                    <input type="radio" name="mat_timing" onClick={dashboardStore.showFacultyPopup.bind(dashboardStore)}/>
                    <label>Tue, 10:00 AM - 10:30 AM</label>
                  </div>
                  <div className="ISK-listItem">
                    <input type="radio" name="mat_timing" onClick={dashboardStore.showFacultyPopup.bind(dashboardStore)}/> 
                    <label>Tue, 10:30 AM - 11:00 AM</label>
                  </div>
                </div>
                <div className="ISK-pane__footer">
                  <i className="fa fa-money p-r-8" aria-hidden="true"></i>Fee for the classes is Rs. 3000/-
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="ISK-panel">
                <div className="ISK-pane__header">
                  Chemistry
                </div>
                <div className="ISK-pane__body">
                  <div className="ISK-listItem">
                    <input type="radio" name="che_timing" onClick={dashboardStore.showFacultyPopup.bind(dashboardStore)}/>
                    <label>Tue, 09:00 AM - 09:30 AM</label>
                  </div>
                  <div className="ISK-listItem">
                    <input type="radio" name="che_timing" onClick={dashboardStore.showFacultyPopup.bind(dashboardStore)}/>
                    <label>Tue, 09:30 AM - 10:00 AM</label>
                  </div>
                  <div className="ISK-listItem">
                    <input type="radio" name="che_timing" onClick={dashboardStore.showFacultyPopup.bind(dashboardStore)}/>
                    <label>Tue, 10:00 AM - 10:30 AM</label>
                  </div>
                  <div className="ISK-listItem">
                    <input type="radio" name="che_timing" onClick={dashboardStore.showFacultyPopup.bind(dashboardStore)}/>
                    <label>Tue, 10:30 AM - 11:00 AM</label>
                  </div>
                </div>
                <div className="ISK-pane__footer">
                  <i className="fa fa-money p-r-8" aria-hidden="true"></i>Fee for the classes is Rs. 3000/-
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="ISK-panel">
                <div className="ISK-pane__header">
                  Physics
                </div>
                <div className="ISK-pane__body">
                      <div className="ISK-listItem">
                        <input type="radio" name="phy_timing" onClick={dashboardStore.showFacultyPopup.bind(dashboardStore)}/>
                        <label>Tue, 09:00 AM - 09:30 AM</label>
                      </div>
                      <div className="ISK-listItem">
                        <input  type="radio" name="phy_timing" onClick={dashboardStore.showFacultyPopup.bind(dashboardStore)}/>
                        <label>Tue, 09:30 AM - 10:00 AM</label>
                      </div>
                      <div className="ISK-listItem">
                        <input  type="radio" name="phy_timing" onClick={dashboardStore.showFacultyPopup.bind(dashboardStore)}/>
                        <label>Tue, 10:00 AM - 10:30 AM</label>
                      </div>
                      <div className="ISK-listItem">
                        <input  type="radio" name="phy_timing" onClick={dashboardStore.showFacultyPopup.bind(dashboardStore)}/>
                        <label>Tue, 10:30 AM - 11:00 AM</label>
                      </div>
                    </div>
                    <div className="ISK-pane__footer">
                      <i className="fa fa-money p-r-8" aria-hidden="true"></i>Fee for the classes is Rs. 3000/-
                    </div>
                  </div>
                </div>
                
              </div>
              
              <div className="row">
                <div className="col-12 m-t-50 text-center">
                  <button type="button" className="btn btn-primary" onClick={dashboardStore.registerClick.bind(dashboardStore)}>Register</button>
                </div>
              </div>

            <Modal
              show={dashboardStore.showFaculty}
              backdrop={true}
              backdropClassName="fade"
              centered
              onHide={dashboardStore.hideFaculty.bind(dashboardStore)}
              dialogClassName="RDE-loginSignup-modal">
                <div >
                  <div class="" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Select Professor</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={dashboardStore.hideFaculty.bind(dashboardStore)}>
                      <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="ISK-listItem">
                        <input type="checkbox"/>
                        <label>Vamshi</label>
                      </div>
                      <div class="ISK-listItem">
                        <input type="checkbox"/>
                        <label>Ram</label>
                      </div>
                      <div class="ISK-listItem">
                        <input type="checkbox"/>
                        <label>Jack</label>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" onClick={dashboardStore.hideFaculty.bind(dashboardStore)}>Close</button>
                      <button type="button" class="btn btn-primary">Add</button>
                    </div>
                    </div>
                  </div>
                </div>
            </Modal>
        </>:<>
          <div CLassName="row ">
            <div className="col-12 text-center">
              <h2 className="successTxt"> you have registered successfully. </h2>
            </div>
          </div>
          <div CLassName="row ">
            <div className="col-12 text-center">
              <h6 className="cus-ptr" onClick={dashboardStore.registerAnother.bind(dashboardStore)}><u>click here to register another.</u> </h6>
            </div>
          </div>
        </>}</>
    
	  );
	}
}

export default observer(Dashboard);
