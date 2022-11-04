export default function StopScheduleItem(props) {
  return (
    <div className="stop-schedule-item">
      Route: {props.headsign}
      <br></br>
      Departure Time: {props.time}
      <br></br>
    </div>

  )
}