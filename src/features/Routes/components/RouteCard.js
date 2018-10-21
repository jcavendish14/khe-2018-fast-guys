import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from "react-router-dom";
import Rating from 'react-rating';

class RouteCard extends Component {
  render() {
    const { city, description, distance, rating, state, username, routeId, routeSnapshot } = this.props;
    var url;
    if(routeSnapshot.snapshot){
      url = routeSnapshot.snapshot.fileName;
    }
    return (
      <Link to={`/route/${routeId}`}>
        <Card className='route-card'>
          <CardImg top width="100%" src={url} alt="Card image cap" />
          <CardBody>
            <CardTitle>{`${distance} mi in ${city}, ${state}`}</CardTitle>
            <CardSubtitle>{`Created by: ${username}`}</CardSubtitle>
            <div className='rating'>
              <Rating readonly={true} quiet={true} initialRating={rating} />
            </div>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </Link>
    );
  }
}

export default RouteCard;
