import React, { Component } from "react";

import "./App.css";
import HookTimer from "./ReactHook/HookTimer.js";
import User from "./redux/User.js";
import Loggain from "./Loggain/Loggain.js";

export const UserContext = React.createContext();
export const ChanelContext = React.createContext();

class App extends Component {
  render() {
    return (
      <div>
        <Loggain />
      </div>
    );
  }
}

export default App;
/*
const { Provider, connect } = ReactRedux;
const { createStore, applyMiddleware } = Redux;
const thunk = ReduxThunk.default;



class App extends React.Component {
  componentDidMount() {
    this.props.fetchPostsWithRedux();
  }
  render() {
    return (
      <ul>
        {this.props.posts &&
          this.props.posts.map((post) => {
            return <li>{post.title}</li>;
          })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

let Container = connect(mapStateToProps, { fetchPostsWithRedux })(App);

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById("container")
);
*/
