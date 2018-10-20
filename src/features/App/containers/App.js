import React, { Component } from 'react';
import '../../../shared.scss';
import RoutesContainer from '../../Routes/containers/RoutesContainer';
import RouteInfoContainer from '../../RouteInfo/containers/RouteInfoContainer';
import RoutesPage from '../../Routes/components/RoutesPage';
import { connect } from 'react-redux';
import { getRoutes, getNumOfRoutes } from '../../../store/Routes/actions';
import { numOfRoutesSelector } from '../../../store/Routes/selectors';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  componentDidMount() {
    this.props.getNumOfRoutes();
  }

  render() {
    return (
      <div className="app__container">
        <Router>
          <Switch>
            <Route path="/" render={props => <RoutesContainer {...props} numOfRoutes={this.props.numOfRoutes}/>}/>
            <Route path="/route/:routeId" component={RouteInfoContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  numOfRoutes: numOfRoutesSelector(state)
});

const mapDispatchToProps = dispatch => ({
  getRoutes: pageNumber => {
      dispatch(getRoutes(pageNumber));
  },
  getNumOfRoutes: () => {dispatch(getNumOfRoutes())}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);