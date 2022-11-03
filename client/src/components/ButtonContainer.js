import React from "react";
import Button from './Button'
import './ButtonContainer.css'

export default function ButtonContainer(props) {
  return(
    <div className="button-container">
      <Button text="Current Location"/>
      <Button text="Show Nearby Stops" onClick={props.getNearbyStations}/>
    </div>
  )
}

// onClick={props.showNearbyStations}