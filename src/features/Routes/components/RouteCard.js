import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from "react-router-dom";


  
class RouteCard extends Component {
  render() {
    const { city, description, distance, rating, state, username, routeId } = this.props;
    return (
      <Link to={`/route/${routeId}`}>
        <Card className='route-card'>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{distance}</CardTitle>
            <CardSubtitle>{username}</CardSubtitle>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </Link>
    );
  }
}

export default RouteCard;
