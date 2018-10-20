import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import RouteCard from '../components/RouteCard';

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
        return (
            <Container>
                <Row>
                    {this.createRouteCards()}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RoutesContainer);
