import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from "react-router-dom";
import Rating from 'react-rating';
import Img from 'react-image';
import { DotLoader } from 'react-spinners';

class RouteCard extends Component {
  render() {
    const { city, description, snapshotFile, distance, rating, state, username, routeId } = this.props;
    return (
      <Link to={`/route/${routeId}`}>
        <Card className='route-card'>
          <Img width="100%" src={snapshotFile} loader={<div className='placeholder'><DotLoader size={100} color={'#007bff'}/></div>} />
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
