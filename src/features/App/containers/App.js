import React, { Component } from 'react';
import '../../../shared.scss';
import RoutesContainer from '../../Routes/containers/RoutesContainer';
import RouteInfoContainer from '../../RouteInfo/containers/RouteInfoContainer';
import { connect } from 'react-redux';
import { getRoutes, getNumOfRoutes, getFileType, goToPage } from '../../../store/Routes/actions';
import { numOfRoutesSelector, currentPageSelector, routesOnSelectedPageSelector, routeSnapshotSelector } from '../../../store/Routes/selectors';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  PAGE_LENGTH = 9;

  componentDidMount() {
    const { getNumOfRoutes, getRoutes, currentPage } = this.props;
    getNumOfRoutes();
    getRoutes(currentPage, this.PAGE_LENGTH);
  }

  render() {
    const { numOfRoutes, currentPage, routes, goToPage, routeSnapshots } = this.props;
    return (
      <React.Fragment>
        <Navbar color="dark" dark expand="md">
            <NavbarBrand>Fast Guys</NavbarBrand>
        </Navbar>
        <div className="app__container">
          <Router>
            <Switch>
              <Route exact path="/:pageNum?" render={props => 
                <RoutesContainer 
                  {...props} 
                  numOfRoutes={numOfRoutes}
                  currentPage={currentPage}
                  routes={routes}
                  goToPage={goToPage}
                  routeSnapshots={routeSnapshots}
                />}
              />
              <Route path="/route/:routeId" render={props => 
                <RouteInfoContainer
                  {...props} 
                  currentPage={currentPage}
                />}
              />
            </Switch>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  numOfRoutes: numOfRoutesSelector(state),
  currentPage: currentPageSelector(state),
  routes: routesOnSelectedPageSelector(state),
  routeSnapshots: routeSnapshotSelector(state)
});

const mapDispatchToProps = dispatch => ({
  getRoutes: (pageNumber, length) => {
      dispatch(getRoutes(pageNumber, length));
  },
  getNumOfRoutes: () => {dispatch(getNumOfRoutes())},
  goToPage: (pageNumber) => {dispatch(goToPage(pageNumber))}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);