import React from 'react';
import './formRegistration.css'
import {NavLink} from "react-router-dom";

const FormRegistration = (props) => {
  return <div className="container register-form">
    <div className="form">
      <div className="note">
        <p className='display-4'>Registration Form</p>
      </div>

      <div className="form-content">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control p-3" placeholder="Your Name *" value=""/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control p-3" placeholder="Phone Number *" value=""/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control p-3" placeholder="Your Password *" value=""/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control p-3" placeholder="Confirm Password *" value=""/>
            </div>
          </div>
        </div>
        <button type="button" className="btnSubmit">Submit</button>
        <div className='my-3'><NavLink  to='/login'>Have already account? Login</NavLink></div>
      </div>

    </div>
  </div>
}

export default FormRegistration
