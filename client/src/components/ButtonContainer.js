import React from "react";
import Button from './Button'
import './ButtonContainer.css'
import './DirectionForm.css'

export default function ButtonContainer(props) {
  return(
    <div className="button-container">
      <Button text="Current Location" onClick={props.CurrentLocation}/>
      <Button text="Show Nearby Stops" onClick={props.getNearbyStations}/>
    </div>
  )
}

// onClick={props.showNearbyStations}