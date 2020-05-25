import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.props.formData.maxChars} onChange={this.props.formData.maxChars}/>
      </div>
    );
  }
}

export default TwitterMessage;
