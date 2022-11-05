import TransitBetter from "../Logo-Images/TransitBettercutoutreverse.png"
import LoadingBubbles from "./LoadingBubbles"
import "./LoadingScreen.css"



export default function Loading() {



  return (
    <div id="logo-container">
      <img src={TransitBetter} width={450} height={450} alt="transit-logo" />
      <span id="logo-text">Transit Better</span>
      <div id="loading-bubbles">
        <LoadingBubbles/>
      </div>
    </div>
  
  )

};