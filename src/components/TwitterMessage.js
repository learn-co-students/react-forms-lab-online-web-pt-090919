import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      // show the remaining characters counter
      counter: props.maxChars,
      message: '',
    };
  }

  handleChange = event => {
    this.setState({
      counter: this.state.counter - 1,
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <h3>Counter: {this.state.counter}</h3>
      </div>
    );
  }
}

export default TwitterMessage;