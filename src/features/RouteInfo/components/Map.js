import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Map extends Component {
  constructor(props) {
    super(props);
    this.map = React.createRef();
  }

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps) {
    const { google, route } = this.props;
    if (google !== prevProps.google) {
      this.loadMap();
    }
  }

  loadMap() {
    const {
      google,
      google: { maps },
    } = this.props;
    if (this.props && google) {
      const mapRef = this.map.current;
      const { centerLat, centerLng, styles, zoom, route } = this.props;

      const center = new maps.LatLng(centerLat, centerLng);
      const mapConfig = Object.assign(
        {},
        {
          center,
          zoom,
          styles,
          fullscreenControl: false
        }
      );
      this.map.current = new maps.Map(mapRef, mapConfig);
      var ctaLayer = new google.maps.KmlLayer({
        url: route? route.kmlFile : '',
        map: this.map.current
      });

      maps.event.trigger(mapRef, 'ready');
      this.forceUpdate();
    }
  }

  renderChildren() {
    const { children, google } = this.props;
    const mapRef = this.map.current;
    if (!children) return;

    return React.Children.map(children, child => {
      if (!child) return;
      return React.cloneElement(child, {
        map: mapRef,
        google
      });
    });
  }

  render() {
    return (
      <div className="map" ref={this.map}>
        {this.renderChildren()}
      </div>
    );
  }
}

Map.propTypes = {
  centerLat: PropTypes.number.isRequired,
  centerLng: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired
};

export default Map;
