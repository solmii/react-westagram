import React from 'react';
// react-router-dom 패키지에서 아래의 기능을 가져옴
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/main' component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
