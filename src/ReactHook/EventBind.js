import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = { x: "hej" };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      x: "hej då",
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.x}</div>
        <button onClick={this.clickHandler}> click</button>
      </div>
    );
  }
}

export default EventBind;
