import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import 'semantic-ui-css/semantic.min.css';

import { PostContainer, NotFound, Info } from './containers';
import { Header, Navigate} from './components';


const Boards = withRouter(
  lazy(() => import('./containers/Boards/Boards'))
);

class App extends Component {
  render() {
    return (
      <div>
        <Router>
            {/*기본 세팅*/}
            <Route path="/" component={Header}/>
            <Route path="/" component={Navigate}/>
            {/*내용*/}
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {/*메인 페이지*/}
                <Route exact path="/" component={PostContainer}/>
                {/*정보 페이지*/}
                <Route path="/info" component={Info}/>
                {/*방명록 페이지*/}
                <Route path="/boards" component={Boards} />
                <Route path="**" component={NotFound} />
              </Switch>
            </Suspense>
          </Router>
      </div>
    );
  }
}

export default App;
