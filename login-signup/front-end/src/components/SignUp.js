import React, {Component} from "react";
import {Link} from 'react-router-dom';
import "./../scss/normalizer.scss";
import "./../scss/form.scss";

export default class SignUp extends Component {
  render() {
    return(
      <div className="form_container SignUp">
        <h1 className="form_head">SignUp</h1>
        <form className="form">
          <input type="text" className="form_field utils_style" placeholder="Full Name" />
          <input type="text" className="form_field utils_style" placeholder="Mobile number or Email" />
          <input type="text" className="form_field utils_style" placeholder="Username" />
          <input type="text" className="form_field utils_style" placeholder="Password" />
          <button className="form_btn utils_style">Signup</button>
          <div className="center">
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    )
  }
} 