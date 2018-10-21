import React, { Component } from 'react';
import '../../../shared.scss';
import RoutesContainer from '../../Routes/containers/RoutesContainer';
import RouteInfoContainer from '../../RouteInfo/containers/RouteInfoContainer';
import { connect } from 'react-redux';
import { getRoutes, getNumOfRoutes, goToPage } from '../../../store/Routes/actions';
import { numOfRoutesSelector, currentPageSelector, routesOnSelectedPageSelector, loadedPagesSelector, routeIsFetchingSelector } from '../../../store/Routes/selectors';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  PAGE_LENGTH = 9;

  componentDidMount() {
    const { getNumOfRoutes, getRoutes, currentPage } = this.props;
    console.log('component mounting');
    getRoutes(currentPage, this.PAGE_LENGTH);
    getNumOfRoutes();
  }

  componentDidUpdate(prevProps) {
    const { currentPage, getRoutes, loadedPages } = this.props;
    if(currentPage !== prevProps.currentPage) {
      if(!loadedPages.some(loadedPage => currentPage === loadedPage))
      getRoutes(currentPage, this.PAGE_LENGTH);
    }
  }

  render() {
    const { numOfRoutes, currentPage, routes, goToPage, isFetching } = this.props;
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
                  isFetching={isFetching}
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
  loadedPages: loadedPagesSelector(state),
  isFetching: routeIsFetchingSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getRoutes: (pageNumber, length) => 
      dispatch(getRoutes(pageNumber, length))
  ,
  getNumOfRoutes: () => dispatch(getNumOfRoutes()),
  goToPage: (pageNumber) => dispatch(goToPage(pageNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);