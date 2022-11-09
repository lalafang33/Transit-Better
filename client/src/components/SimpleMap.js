import { React, useContext, useState } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";
import DirectionForm from "./DirectionForm";
import { useRef } from "react";
import LocationPin from "./LocationPin";
import CurrentLocation from "./CurrentLocation";
import './DirectionForm.css'
// import dotenv from "dotenv"
// dotenv.config()




const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(props) {


  const defaultProps = {
    center: {
      lat: 49.2712,
      lng: -123.1340
    },
    zoom: 11
  };

  const nearbyStations = props.nearbyStations.map((station) => {
    
    return (<Marker
      key={station.place.id}
      lat={station.place.location.lat}
      lng={station.place.location.lng}
      text={station.place.name}
      onClick={() => {
        props.getStationSchedule(station.place.id)
        props.handleOpen()
      
        }}
    />)
  })


  let userData = [];

  if (props.userLat && props.userLong) {

    userData = [{ lat: props.userLat, lng: props.userLong }]

  };

  const userLocation = userData.map((user, index) => {
    return (<LocationPin
      key={index}
      lat={user.lat}
      lng={user.lng}
      text="Current Location"
    />)
  })


  const inputEl = useRef(null);



  return (
    // Important! Always set the container height explicitly
    <div id="map">
      <GoogleMapReact
        id="google-map"
        style={{ height: '100vh', width: 'this.state.progress', position: 'relative' }}
        bootstrapURLKeys={{ key: "AIzaSyBJcuaSVdI86sL8eyTV1ZyIMHD10zG8nGo" }}
        ref={inputEl}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {userLocation}
        {nearbyStations}
      </GoogleMapReact>
      <div>
      <DirectionForm
        map={inputEl}
      />
       </div>
    </div>
  );
}