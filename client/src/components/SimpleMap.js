import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(props){
  const defaultProps = {
    center: {
      lat: 49.2712,
      lng: -123.1340
    },
    zoom: 11
  };

  const nearbyStations = props.nearbyStations.map((station) => {
    return(<Marker
    lat={station.place.location.lat}
    lng={station.place.location.lng}
    text={station.place.name}
    />)
  })

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "APIKEY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {nearbyStations}
      </GoogleMapReact>
    </div>
  );
}