import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import RouteCard from '../components/RouteCard';

class RoutesContainer extends Component {
    createRouteCards() {
        const that = this;
        const routeCards = this.props.routes.map(route => {
            let routeSnapshot = {}
            for (var i = 0; i < that.props.routeSnapshots.length; i++) {
                let snap = that.props.routeSnapshots[i]
                if(snap.routeId === route.routeId){
                    routeSnapshot = snap;
                }
            }
            console.log(routeSnapshot);
            return(
                <Col xs="12" md="4">
                    <RouteCard {...route} routeSnapshot={routeSnapshot} />
                </Col>
            );
        });
        return routeCards;
    }

    render() {
        return (
            <Row>
                {this.createRouteCards()}
            </Row>
        );
    }
}

export default RoutesContainer;
