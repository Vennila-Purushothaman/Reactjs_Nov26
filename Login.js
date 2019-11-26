import React, { Component } from 'react';
import { render } from 'react-dom';


class Login extends Component {
  constructor(props) {
    super();
    this.state={
      username : "",
      password : ""
    };
  }

  render() {
    return(
      <form name="loginForm" onSubmit={this.onSubmit}>
      <div>
        <label>Username : </label>
        <input type="email" name="email" onChange={e => this.setState({username: username.target.value})} value={username}/>

        <label>Password : </label>
        <input type="password" name="password" onChange={e => this.setState({password: password.target.value})} value={username}/>
      </div>
      </form>
    );
  }
}