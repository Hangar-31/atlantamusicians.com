/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { PropTypes } from 'prop-types';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';

const iconStyle = {
  borderRadius: '200px',
  boxShadow: '3px 3px 1px #888888',
};

const CurrentPin = ({ text }) => (
  <div>
    <Icon name="Atlanta Musicians Of Federation" color="blue" size="big" style={iconStyle}>
      {text}
    </Icon>
  </div>
);

const MapOfficeLocation = (props) => {
  const {
    lat, lng, zoom, onChildMouseEnter, onChildMouseLeave,
  } = props;
  const myLatLng = { lat: 33.7918465, lng: -84.3692521 };
  const renderMarkers = (map, maps) => {
    const marker = new maps.Marker({
      position: myLatLng,
      map,
      title: 'Atlanta Musicians Of Federation',
    });
    return marker;
  };
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        bootstrapURLKeys={{
          key: 'AIzaSyCVP7zWtO6GlLR9o62ktbK6p-HTaa1sZVQ',
        }}
        defaultCenter={myLatLng}
        defaultZoom={zoom}
        onChildMouseEnter={onChildMouseEnter}
        onChildMouseLeave={onChildMouseLeave}
        yesIWantToUseGoogleMapApiInternals
      >
        <img
          alt=""
          css={css`
            position: absolute;
            left: -25px;
            top: -76px;
          `}
          lat={lat}
          lng={lng}
          text="My Marker"
        />
        <CurrentPin />
      </GoogleMapReact>
    </div>
  );
};

MapOfficeLocation.defaultProps = {
  lat: 33.7918465,
  lng: -84.3692521,
  zoom: 15,
};

MapOfficeLocation.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number,
};

export default MapOfficeLocation;
