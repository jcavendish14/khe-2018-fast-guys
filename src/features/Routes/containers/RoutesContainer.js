import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink, Container, Row } from 'reactstrap';
import RoutesPage from '../../Routes/components/RoutesPage';
import { BarLoader } from 'react-spinners';

class RoutesContainer extends Component {
    createPagination() {
        const { currentPage, numOfRoutes, goToPage } = this.props;
        const numOfPages = Math.ceil(numOfRoutes / 9);
        let paginationItems = [];
        for(var i = 0; i < numOfPages; i++) {
            const pageNum = i + 1;
            const isCurrentPage = pageNum === currentPage;
            paginationItems.push(
                <PaginationItem active={isCurrentPage} key={pageNum}>
                    <Link to={`/${pageNum}`} onClick={() => goToPage(pageNum)}>
                        <PaginationLink>
                            {pageNum}
                        </PaginationLink>
                    </Link>
                </PaginationItem>
            );
        }
        return paginationItems; 
    }

    render() {
        const { routes, isFetching } = this.props;
        return (
            <Container>
                {isFetching && (
                <Row>
                    <BarLoader width={1000} />
                </Row>
                )}
                <Route path="/:pageNum?" render={props => <RoutesPage {...props} routes={routes}/>}/>
                <Row className='routes-pagination'>
                    <Pagination size="lg">
                        {this.createPagination()}
                    </Pagination>
                </Row>
            </Container>
        );
    }
}

export default RoutesContainer;
