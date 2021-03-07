import React, { Component, useEffect } from "react";

class NameList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const names = ["a", "b", "c"];
    const nameList = names.map((name) => <h2>{name}</h2>);
    return <div>{nameList}</div>;
  }
}

export default NameList;
