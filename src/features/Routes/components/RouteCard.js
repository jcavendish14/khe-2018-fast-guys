import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from "react-router-dom";
import Rating from 'react-rating';

class RouteCard extends Component {
  render() {
    const { city, description, snapshotFile, distance, rating, state, username, routeId } = this.props;
    return (
      <Link to={{'pathname': `/route/${routeId}`, 'state':{'routeId': routeId}}}>
        <Card className='route-card'>
          <CardImg top width="100%" src={snapshotFile} alt="Card image cap" />
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
