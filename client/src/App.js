import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DirectionForm from './components/DirectionForm';
import la_center from './const/la_center';
import SimpleMap from './components/SimpleMap';
import Map from './components/Map'
import ButtonContainer from './components/ButtonContainer'
import axios from 'axios'
import { React, useState } from 'react';

function App() {
  console.log("APP COMPONENT")

  const [nearbyStations, setNearbyStations] = useState([])


  const getNearbyStations = () => {

    const apiKey = "HERE-APIKEY"; // INSERT API KEY HERE OR SET UP .ENV DO NOT PUSH APIKEY TO GITHUB
    const userCoords = "49.259832294,-123.109499562"
    console.log("making axios.get request for nearby stations by location")
    axios.get(`https://transit.hereapi.com/v8/stations?in=${userCoords}&apiKey=${apiKey}`)
      .then((res) => {
        setNearbyStations(res.data.stations)

      })
  }





  return (
    <div className="App">
      <h2> Hello </h2>
      <SimpleMap nearbyStations={nearbyStations}/>
      <ButtonContainer getNearbyStations={getNearbyStations} />
      <DirectionForm />
    </div>
  );
}

export default App;
