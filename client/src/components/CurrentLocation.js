import { useContext, useState } from "react";
import googleMapReact from "google-map-react";
import './main-container.css'


export default function CurrentLocation() {

  const [userLat, setuserLat] = useState(0);
  const [userLong, setuserLong] = useState(0);

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



    return (
      <button className="location-btn"
      onClick={() => getPosition()}
      >
        Get Current Location:
      </button>
     

    )
}