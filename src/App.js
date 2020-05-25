import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {
  state = {
    maxChars: 280,
    username: "",
    password: ""
  }

  login = ({ username, password }) => {
    console.log(`Logging in ${username} with password ${password}`);
    this.setState({
      username, password
    })
  };

  render() {
    return (
      <div>

        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm formData={this.state} handleLogin={this.login} />

        <h1>
          <pre>TwitterMessage</pre>
        </h1>
        <TwitterMessage formData={this.state} maxChars={280} />



      </div>
    )
  }
}

export default App
