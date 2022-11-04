import { useState } from "react";
import axios from "axios"
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SimpleMap from './components/SimpleMap';
import ButtonContainer from "./components/ButtonContainer";
import CurrentLocation from './components/CurrentLocation';
import StopSchedule from "./components/StopSchedule";


function App() {
  console.log("APP COMPONENT")

  const [nearbyStations, setNearbyStations] = useState([])
  const [userLat, setuserLat] = useState();
  const [userLong, setuserLong] = useState();
  const [stopSchedule, setStopSchedule] = useState([]);


  const apiKey = ""; // INSERT API KEY HERE OR SET UP .ENV DO NOT PUSH APIKEY TO GITHUB

  const getNearbyStations = () => {
    const userCoords = `${userLat},${userLong}`
    console.log("making axios.get request for nearby stations by location")
    axios.get(`https://transit.hereapi.com/v8/stations?in=${userCoords}&apiKey=${apiKey}`)
      .then((res) => {
        setNearbyStations(res.data.stations)

      })
  }

  const getStationSchedule = (id) => {
    
    console.log("making axios.get request for departures by station id");
    axios.get(`https://transit.hereapi.com/v8/departures?ids=${id}&apiKey=${apiKey}`)
      .then((res) => {
        console.log("Departures: ", res.data.boards[0].departures)
        setStopSchedule(res.data.boards[0].departures)
      })
  }

  function CurrentLocation() {

    const getPosition = () => {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, posError);
      } else {
        alert("Sorry, Geolocation is not supported by this browser.");
      }
    }

    const posError = () => {
      if (navigator.permissions) {
        navigator.permissions.query({ name: 'geolocation' }).then(res => {
          if (res.state === 'denied') {
            alert('Enable location permissions for this website in your browser settings.')
          }
        })
      } else {
        alert('Unable to access your location. You can continue by submitting location manually.')
      }
    }

    const showPosition = (position) => {
      let lat = position.coords.latitude
      let long = position.coords.longitude
      setuserLat(lat)
      setuserLong(long)
    }

    getPosition();

  }


  return (
    <div className="App">
      <h2> Hello </h2>
      <CurrentLocation />
      <SimpleMap
        nearbyStations={nearbyStations}
        userLat={userLat}
        userLong={userLong}
        getStationSchedule={getStationSchedule}
      />
      <ButtonContainer
        getNearbyStations={getNearbyStations}
        CurrentLocation={CurrentLocation}
      >
      </ButtonContainer>
      <StopSchedule stopSchedule={stopSchedule}/>


    </div>
  );
}

export default App;
