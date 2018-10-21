import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import RouteCard from '../components/RouteCard';

class RoutesContainer extends Component {
    createRouteCards() {
        const routeCards = this.props.routes.map(route => {
            return(
                <Col xs="12" md="4">
                    <RouteCard {...route} />
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
