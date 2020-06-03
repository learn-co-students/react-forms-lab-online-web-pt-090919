import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let chars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        onChange={this.handleChange} 
        type="text" 
        name="message" 
        id="message"
        value={this.state.message} />
        {chars}
      </div>
    );
  }
}

export default TwitterMessage;
