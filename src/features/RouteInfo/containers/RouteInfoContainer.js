import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { BrowserRouter as Link } from "react-router-dom";
import { getRoutesId } from '../../../store/Routes/actions';

class RouteInfoContainer extends Component {

    componentDidMount() {
        this.props.getRouteById(4);
    }

    render() {
        return (
            <div>
                <Link to='/'>
                    <Button color='primary'>Back to Routes</Button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    getRouteById: (routeId) => {dispatch(getRoutesId(routeId))}
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RouteInfoContainer);
