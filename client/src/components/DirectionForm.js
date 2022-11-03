import { DirectionsRenderer, DirectionsService, GoogleMap } from '@react-google-maps/api';
// use state -> onchange 
import { useEffect, useState } from "react"
export default function DirectionForm({map}) {

  const [mode, setMode] = useState("TRANSIT")
  const [renderer, setRenderer] = useState()
  const [service, setService] = useState()

  useEffect(()=> {
    setTimeout(()=>{
      console.log("I AM HERE", window)
      setRenderer(new window.google.maps.DirectionsRenderer())
      setService(new window.google.maps.DirectionsService())
    },1000)
  },[])

  const selectedMode = (value) => {
    console.log("I AM VALUE", value)
    console.log("I AM MAP", map)
    setMode(value); 
    calculateAndDisplayRoute(service, renderer)
  }
  // change state of "to"
    const [to, setTo] = useState("")
    const origin = (value) => {
      console.log("I AM start", value)
      setTo(value)
    }

    const [from, setFrom] = useState("")
    const destination = (value) => {
      console.log("I AM DESTINATION", value)
      setFrom(value)
    }

  function calculateAndDisplayRoute(DirectionsService, DirectionsRenderer){
    console.log("I AM MAP", map)
    renderer.setMap(map.current.map_);

    DirectionsService
    .route({
      origin: to,
      destination: from,
      travelMode: window.google.maps.TravelMode[mode],
    })
    .then((response) => {
      DirectionsRenderer.setDirections(response);
      console.log(response)
    })
    .catch((e)=> console.error("Direction request failed" + e)); 
  }
  return(
    <div id="floating-panel">
      <div>
        <input type="text" id="from" placeholder="Origin" onChange={event => origin(event.target.value)}/>
      </div>
      <div>
      <input type="text" id="to" placeholder="Destination" onChange={event => destination(event.target.value)}/>
      </div>
      <div>
        <b> Mode of Travel {mode} </b>
        <select id="mode" onChange={event => selectedMode(event.target.value)}>
          <option value="DRIVING"> Driving</option>
          <option value="WALKING"> Walking</option>
          <option value="BICYCLING"> Bicycling</option>
          <option value="TRANSIT"> Transit</option>
        </select>
      </div>
    </div>
  )
}