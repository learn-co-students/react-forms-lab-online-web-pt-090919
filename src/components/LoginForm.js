import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = { username: '', 
                   password: ''
                  };
  }


  handleInputChange =(event)=>{  
    let name  = event.target.name
    let value =  event.target.value
    this.setState({ [name] : value })
  } 
  
  func = (e) =>{ 
    
    
    e.preventDefault();
    (this.state.username !== '' && this.state.password !== '') ?  this.props.handleLogin(this.state.username, this.state.password)  : alert("need username and password!")
    }  
  
  render(){ 
    return ( 
      <div> 
       
        <form   onSubmit={ this.func}  >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={(event) => this.handleInputChange(event)} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={(event) => this.handleInputChange(event)} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div> 
        
      </form> 
      </div>
    );
  }
}

export default LoginForm;
