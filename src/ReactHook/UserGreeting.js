import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggogedIn: false };
  }

  render() {
    let message;
    if (this.state.isLoggogedIn) {
      message = <div>hej</div>;
    } else {
      message = <div>hej då </div>;
    }
    return <div>{message}</div>;
  }
  //  return this.state.isLoggogedIn && <div> hej one</div>;

  //this.state.isLoggogedIn ? <div> hej one</div> : <div> hej two</div>;
}
