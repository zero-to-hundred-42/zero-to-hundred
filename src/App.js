import React, { Component } from "react";
import { Header, Navigate } from './components';
import PostContainer from "./containers/PostContainers/PostContainers";
import Board from "./containers/Board/Board";
import About from "./containers/About/About";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path='/' component={Header} />
          <Route path='/' component={Navigate} />
          {/* <Header/> */}
          <Switch>
            <Route exact path='/' component={PostContainer} />
            <Route path="/board" component={Board} />
            <Route path="/about" component={About} />
            {/* <PostContainer/> */}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;