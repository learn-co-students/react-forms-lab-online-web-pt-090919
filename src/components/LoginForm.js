import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = { username: '', 
                   password: ''
                  };
  }


  handleInputChange =(event)=>{  
    let name = event.target.name 
    let value =  event.target.value
    this.setState((previousState) =>{ 
      return { ...previousState[name] = value }
     })
  } 
  pleaseSubmit = (event) =>{
    event.preventDefault()
    
    console.log("Yay")
  } 
  func = () =>{
    (this.state.username !== '' && this.state.password !== '') ? (event) =>{ 
      event.preventDefault()
      this.props.handleLogin} : alert("need username and password!")
    }  
  
  render(){ 
    return ( 
      <div> 
       <p>{this.state.username + " + " + this.state.password}</p> 
       
        <form   onSubmit={(event) => { 
          event.preventDefault();
          return this.func }}  >
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
