// use state -> onchange 
import { useState } from "react"
// select tag -> onchange event execute function when change is given  calculateanddisplayroute function 
// import { DirectionsRenderer, DirectionsServices } from '@react-google-maps/api'



export default function DirectionForm() {
  const [mode, setMode] = useState("TRANSIT")
  const test = (value) => {
    console.log("I AM VALUE", value)
    setMode(value); 
  }

  return(
    <div id="floating-panel">
      <div>
        <input type="text" id="from" placeholder="Origin"/>
      </div>
      <div>
      <input type="text" id="to" placeholder="Destination"/>
      </div>
      <div>
        <b> Mode of Travel {mode} </b>
        <select id="mode" onChange={event => test(event.target.value)}>
          <option value="DRIVING"> Driving</option>
          <option value="WALKING"> Walking</option>
          <option value="BICYCLING"> Bicycling</option>
          <option value="TRANSIT"> Transit</option>
        </select>
      </div>
    </div>
  )
}