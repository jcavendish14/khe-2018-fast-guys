import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink, Container, Row } from 'reactstrap';
import RoutesPage from '../../Routes/components/RoutesPage';


class RoutesContainer extends Component {
    createPagination() {
        const { numOfRoutes } = this.props;
        const numOfPages = Math.ceil(numOfRoutes / 9);
        let paginationItems = [];
        for(var i = 0; i < numOfPages; i++) {
            paginationItems.push(
                <PaginationItem>
                    <Link to={`/${i + 1}`}>
                        <PaginationLink>
                            {i + 1}
                        </PaginationLink>
                    </Link>
                </PaginationItem>
            );
        }
        return paginationItems; 
    }

    render() {
        const { routes } = this.props;
        return (
            <Container>
                <Route path="/:pageNum?" render={props => <RoutesPage {...props} routes={routes} />}/>
                <Row className='routes-pagination'>
                    <Pagination>
                        {this.createPagination()}
                    </Pagination>
                </Row>
            </Container>
        );
    }
}

export default RoutesContainer;
