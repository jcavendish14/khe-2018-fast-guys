import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link } from 'react-router'

class RouteInfoContainer extends Component {
    render() {
        return (
            <div>
                <Link to='/'>
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
