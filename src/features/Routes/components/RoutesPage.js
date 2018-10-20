import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import RouteCard from '../components/RouteCard';
import { Pagination, PaginationItem } from 'reactstrap';
import { BrowserRouter as Link } from "react-router-dom";

class RoutesContainer extends Component {
    createRouteCards() {
        const routes = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        const routeCards = routes.map(route => {
            return(
                <Col xs="12" md="4">
                    <RouteCard routeId={route}/>
                </Col>
            );
        });
        return routeCards;
    }

    render() {
        console.log(this.props);
        return (
            <Container>
                <Row>
                    {this.createRouteCards()}
                </Row>
            </Container>
        );
    }
}

export default RoutesContainer;
