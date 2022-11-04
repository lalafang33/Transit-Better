import StopScheduleItem from "./StopScheduleItem";

export default function StopSchedule(props){

const stopScheduleComponents = props.stopSchedule.map((departure, index) => {
  const timeString = new Date(departure.time).toLocaleTimeString()
  
  const convertFrom24To12Format = (time24) => {
    const [sHours, minutes] = time24.match(/([0-9]{1,2}):([0-9]{2})/).slice(1);
    const period = +sHours < 12 ? 'AM' : 'PM';
    const hours = +sHours % 12 || 12;
  
    return `${hours}:${minutes} ${period}`;
  }

  const convertedTime = convertFrom24To12Format(timeString)

  
  return(
    <StopScheduleItem
    key={index} 
    headsign={departure.transport.headsign}
    category={departure.transport.category}
    time={convertedTime}
    />
  )
})

return(
  <div className="stop-schedule">
    <h3>Upcoming Departures</h3>
    {stopScheduleComponents}
  </div>
)



}