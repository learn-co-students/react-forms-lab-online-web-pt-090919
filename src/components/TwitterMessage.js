import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: ''}; 
    
  }
  tweet = (event) =>{ 
    let x = event.target.value
    this.setState((previousState) =>{
      return Object.assign({}, {...previousState.message = x})

    })
  } 

    cCounnt = () =>{
      return (this.props.maxChars - this.state.message.length)
    }
  render() {
    return (
      <div> 
        <span><h4>{this.cCounnt()} remaining characters left!</h4></span>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} 
          onChange={ (event) => {this.tweet(event)}}
        />
        <br/>
        {this.state.message} 
        
      </div>
    );
  }
}

export default TwitterMessage;
