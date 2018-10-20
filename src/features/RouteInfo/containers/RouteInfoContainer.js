import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

class RouteInfoContainer extends Component {
    render() {
        const {currentPage} = this.props;

        return (
            <div>
                <Link to={`/${currentPage}`}>
                    <Button color='primary'>Back to Routes</Button>
                </Link>
            </div>
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
  )(RouteInfoContainer);
