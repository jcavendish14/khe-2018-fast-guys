import React, { Component } from 'react';
import '../../../shared.scss';
import RoutesContainer from '../../Routes/containers/RoutesContainer';
import RouteInfoContainer from '../../RouteInfo/containers/RouteInfoContainer';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

class App extends Component {
  render() {
    const history = syncHistoryWithStore(browserHistory, this.props.store)

    return (
      <div className="app__container">
        <Router history={history}>
          <Route path="/" component={RoutesContainer} />
          <Route path="/route/:routeId" component={RouteInfoContainer} />
        </Router>
      </div>
    );
  }
}

export default App;