import React, { Component } from "react";
import ChildComponent from "./ChildComponent.js";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { parentName: "Parent" };
    this.gerrtParent = this.gerrtParent.bind(this);
  }

  gerrtParent() {
    alert("this.gerrtParent}");
  }
  render() {
    return (
      <div>
        <ChildComponent gerrtParent={this.gerrtParent} />
      </div>
    );
  }
}

export default ParentComponent;
