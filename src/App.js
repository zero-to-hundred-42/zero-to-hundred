import React, { Component } from "react";
import { Header, Navigate } from './components';
import PostContainer from "./containers/PostContainers.js/PostContainers";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navigate/>
        <PostContainer/>
      </div>
    )
  }
}

export default App;