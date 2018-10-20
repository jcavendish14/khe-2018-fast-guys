import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
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
        return (
            <div>
                <Route path="/:pageNum" component={RoutesPage}/>
                <Pagination>
                    {this.createPagination()}
                </Pagination>
            </div>
        );
    }
}

export default RoutesContainer;
