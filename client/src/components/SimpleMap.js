import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";
import DirectionForm from "./DirectionForm";
import { useRef } from "react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 49.2712,
      lng: -123.1340
    },
    zoom: 11
  };

    const inputEl = useRef(null);
  


  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        ref={inputEl}
        bootstrapURLKeys={{ key: "API KEY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={49.259832294}
          lng={-123.109499562}
          text="My Marker"
        />
      </GoogleMapReact>
      <DirectionForm
        map={inputEl}
      />
    </div>
  );
}