import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import GoogleApiComponent from '../components/GoogleApiComponent';
import Map from '../components/Map';

class RouteInfoContainer extends Component {
    render() {
        const {currentPage, google} = this.props;
        
        return (
            <div class='container'>
                <Link to={`/${currentPage}`}>
                    <Button color='primary'>Back to Routes</Button>
                </Link>
                <div class='map-container'>
                    <Map
                        google={google}
                        zoom={14}
                        centerLat={37.774929}
                        centerLng={-122.419416}
                    />
                    <div class='map-info'>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const connectRouteInfo = connect(
    mapStateToProps,
    mapDispatchToProps
  )(RouteInfoContainer);

  export default GoogleApiComponent({
    //apiKey: 'AIzaSyDJWkGDQL8xicMCm3-cFeDoXueBLY60SKw',
  })(connectRouteInfo);