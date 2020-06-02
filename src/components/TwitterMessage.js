import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  remainingChars = () => (this.props.maxChars - this.state.message.length)

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleMessageChange} type="text" name="message" id="message" value={this.state.message} />
        <h1>{this.remainingChars()} remaining characters left!</h1>
      </div>
      
    );
  }
}

export default TwitterMessage;
