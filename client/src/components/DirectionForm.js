import { DirectionsRenderer, DirectionsService, GoogleMap } from '@react-google-maps/api';
// use state -> onchange 
import { useEffect, useState, useRef } from "react"
import { OutlinedInput, NativeSelect, MenuItem, Select } from '@mui/material';
import './DirectionForm.css'



export default function DirectionForm({map}) {

  const [mode, setMode] = useState("TRANSIT")
  const [renderer, setRenderer] = useState()
  const [service, setService] = useState()
  const panelEl = useRef(null);

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
      const panel = panelEl.current;
      DirectionsRenderer.setPanel(panel)

    })
    .catch((e)=> console.error("Direction request failed" + e)); 
  }

  return(
    <div id="floating-panel">
      <div>
        <OutlinedInput type="text" id="from" placeholder="Origin" onChange={event => origin(event.target.value)}/>
      </div>
      <div>
      <OutlinedInput type="text" id="to" placeholder="Destination" onChange={event => destination(event.target.value)}/>
      </div>
      <div>
        <b> Mode of Travel </b>
        <Select id="mode" labelId="demo-controlled-open-select-label" onChange={event => selectedMode(event.target.value)}>
          <MenuItem value={"DRIVING"}> Driving</MenuItem>
          <MenuItem value="WALKING"> Walking</MenuItem>
          <MenuItem value="BICYCLING"> Bicycling</MenuItem>
          <MenuItem value="TRANSIT"> Transit</MenuItem>
        </Select>
      </div>
      <div id="direction-panel" ref={panelEl}></div>
    </div>
  )
}