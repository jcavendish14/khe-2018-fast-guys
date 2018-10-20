import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


class RoutesContainer extends Component {
    createPagination() {
        const { numOfRoutes } = this.props;
        const numOfPages = Math.ceil(numOfRoutes / 9);
        let paginationItems = [];
        for(var i = 0; i < numOfPages; i++) {
            paginationItems.push(
                <PaginationItem>
                    <PaginationLink to={`/${i + 1}`} >
                        {i + 1}
                    </PaginationLink>
                </PaginationItem>
            );
        }
        return paginationItems; 
    }

    render() {
        return (
            <div>
                {this.props.children}
                <Pagination>
                    {this.createPagination()}
                </Pagination>
            </div>
        );
    }
}

export default RoutesContainer;
