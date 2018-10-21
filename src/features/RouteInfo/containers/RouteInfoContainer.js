import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { getRoutesId } from '../../../store/Routes/actions';
import GoogleApiComponent from '../components/GoogleApiComponent';
import Map from '../components/Map';
import { routeSelector } from '../../../store/Routes/selectors';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import Rating from 'react-rating';
import { BarLoader } from 'react-spinners';


class RouteInfoContainer extends Component {
    componentDidMount() {
        const { routeId } = this.props.location.state;
        this.props.getRouteById(routeId);
    }

    createComments(comments) {
        let commentItems = [];
        for (let comment of comments) {
            console.log(comment);
            commentItems.push(
                <React.Fragment>
                    <CardText className='comment-user-name'>{comment.username}</CardText>
                    <div className='comment-text'>{comment.text}</div>
                    <hr/>
                </React.Fragment>
            );
        }
        return commentItems;
    }

    render() {
        const {currentPage, google, route} = this.props;
        const { routeId } = this.props.location.state;
        if(!route || route.routeId !== routeId){
            return (<BarLoader width={1000} />)
        }
        else {
            return (
                <div className='container'>
                    <Link to={`/${currentPage}`}>
                        <Button color='primary'>Back to Routes</Button>
                    </Link>
                    <div className='map-container'>
                        <Map
                            google={google}
                            route={route}
                            zoom={14}
                            centerLat={37.774929}
                            centerLng={-122.419416}
                        />
                        <Card className='map-info'>
                            <CardBody className='body'>
                                <CardTitle>{`${route.distance} mi in ${route.city}, ${route.state}`}</CardTitle>
                                <CardSubtitle>
                                    {`Created by: ${route.user.firstName} ${route.user.lastName} `}
                                    {`(${route.user.userName})\n`}
                                    {`from ${route.user.city}, ${route.user.state}`}
                                </CardSubtitle>
                                <div className='rating'>
                                    <Rating readonly={true} quiet={true} initialRating={route.rating} />
                                </div>
                                <CardText>{route.description}</CardText>
                                <hr/>
                                <CardSubtitle>Comments</CardSubtitle>
                                {this.createComments(route.comments)}
                            </CardBody>
                        </Card>
                    </div>
                </div>
            );
        }
        
    }
}



const mapStateToProps = state => ({
    route: routeSelector(state)
});

const mapDispatchToProps = dispatch => ({
    getRouteById: (routeId) => {dispatch(getRoutesId(routeId))}
  });

const connectRouteInfo = connect(
    mapStateToProps,
    mapDispatchToProps
  )(RouteInfoContainer);

  export default GoogleApiComponent({
    apiKey: 'AIzaSyDJWkGDQL8xicMCm3-cFeDoXueBLY60SKw',
  })(connectRouteInfo);