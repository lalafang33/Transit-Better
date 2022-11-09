import { useState, useEffect } from "react";
import axios from "axios"
import '../App.css';
import SimpleMap from './SimpleMap';
import ButtonContainer from "./ButtonContainer";
import StopSchedule from "./StopSchedule"; 
import './main-container.css'
import AddressButton from "./AddressButton";
import BasicModal from "./Modal";



const LoggedInHome =() => {
  const [nearbyStations, setNearbyStations] = useState([])
  const [userLat, setuserLat] = useState();
  const [userLong, setuserLong] = useState();
  const [stopSchedule, setStopSchedule] = useState([]);

    
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const apiKey = "39gelvG0Ia_t8x2pYhzn0wwisBZdWBMGaj1kEGC4VFA"; // INSERT API KEY HERE OR SET UP .ENV DO NOT PUSH APIKEY TO GITHUB

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
      const lat = position.coords.latitude
      const long = position.coords.longitude
      setuserLat(lat)
      setuserLong(long)
    }

    getPosition();

  }
  return(
    <div>
       <CurrentLocation/>
          <SimpleMap
            nearbyStations={nearbyStations}
            userLat={userLat}
            userLong={userLong}
            getStationSchedule={getStationSchedule}
            open={open} 
            handleOpen={handleOpen} 
            handleClose={handleClose} 
          />
          <ButtonContainer
            getNearbyStations={getNearbyStations}
            CurrentLocation={CurrentLocation}
          />
          <BasicModal 
            stopSchedule={stopSchedule} 
            open={open} 
            handleOpen={handleOpen} 
            handleClose={handleClose} 
          />
          <AddressButton/>
    </div>
  )
}

export default LoggedInHome; 