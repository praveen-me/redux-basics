import React, {Component} from "react";
import "./../scss/normalizer.scss";
import "./../scss/form.scss";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login : 'praveen',
      password : 'praveen1234', 
      insertedValue : "",

    }
  }

  handleSubmit = e => {
    e.preventDefault();
    // const userName = 
  }

  render() {
    return (
      <div className="form_container SignUp">
      <h1 className="form_head">LOG IN TO YOUR ACCOUNT</h1>
      <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" className="form_field utils_style" placeholder="Username" />
          <input type="text" className="form_field utils_style" placeholder="Password" />
        <button className="form_btn utils_style">Signin</button>
        <div className="center">
          <a href="#" className="form_link">Forget Password?</a>
        </div>
      </form>
    </div>
    );
  }
}