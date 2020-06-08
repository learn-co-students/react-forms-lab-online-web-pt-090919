import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""

    };
  }

  handleStateChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
      console.log(this.state.username - this.state.password)
  }

  handleLogin = (event) => {
   event.preventDefault()
   if (this.state.username === "" || this.state.password === "") {
     return false
   } else {
     this.props.handleLogin(event)
   }
 }



  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input
            id="username"
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleStateChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input
            id="password"
            name="password"
            type="password"
            onChange={this.handleStateChange}/>
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.handleLogin}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
