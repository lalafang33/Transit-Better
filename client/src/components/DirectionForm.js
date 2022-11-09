import { DirectionsRenderer, DirectionsService, GoogleMap } from '@react-google-maps/api';
// use state -> onchange 
import { useEffect, useState, useRef } from "react"
import { OutlinedInput, NativeSelect, MenuItem, Select, FormControl } from '@mui/material';
import './DirectionForm.css'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import DriveEtaIcon from '@mui/icons-material/DriveEta';




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
      DirectionsRenderer.setPanel(panel);
      document.body.className += " panel-open";

    })
    .catch((e)=> console.error("Direction request failed" + e)); 
  }

  

  return(
    <div id="direction-form">
    <div id="floating-panel">
      <div>
        <DriveEtaIcon id="car-icon" /> 
        <DirectionsWalkIcon id="mode-icon"/>
        <DirectionsBikeIcon id="mode-icon"/>
        <DirectionsTransitIcon id="mode-icon"/>
      </div>
      <br/>
      <div>
        <OutlinedInput 
          label={'margin="dense"'}
          inputProps={{style: {fontSize: 10, color: "black"} }} 
          type="text" id="from" 
          placeholder="Origin" 
          onChange={event => origin(event.target.value)}/>
      </div>
      <div>
        <OutlinedInput 
          label={'margin="dense"'} 
          inputProps={{style: {fontSize: 10, color: "black"} }} 
          type="text" id="to" 
          placeholder="Destination" 
          onChange={event => destination(event.target.value)}/>
      </div>
      <div>
        <b id="mode-font"> Mode of Travel  </b>
        <Select id="mode" 
          style={{ width: 80, height:30, fontSize: 10 }} 
          labelId="demo-controlled-open-select-label" 
          onChange={event => selectedMode(event.target.value)}>
            <MenuItem value="DRIVING"> Driving </MenuItem>
            <MenuItem value="WALKING"> Walking</MenuItem>
            <MenuItem value="BICYCLING"> Bicycling</MenuItem>
            <MenuItem value="TRANSIT"> Transit</MenuItem>
        </Select>
      </div>
    </div>
    <div id="direction-panel" ref={panelEl}></div>
    </div>
  )
}