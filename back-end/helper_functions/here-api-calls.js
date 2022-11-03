const axios = require('axios')

// THIS HAS NOT BEEN IMPORTED ANYWHERE AND WILL NEED TO BE PROPERLY HOOKED UP IN THE FUTURE

const apiKey = ""; // INSERT API KEY HERE OR SET UP .ENV DO NOT PUSH APIKEY TO GITHUB

const getStationSchedule = () => {
  const ids = 414524706;
  console.log("making axios.get request for departures by station id");
  axios.get(`https://transit.hereapi.com/v8/departures?ids=${ids}&apiKey=${apiKey}`)
    .then((res) => {
      console.log("Departures: ", res.data.boards[0].departures)
    })
}

const getNearbyStations = () => {
  const userCoords = "49.259832294,-123.109499562"
  console.log("making axios.get request for nearby stations by location")
  axios.get(`https://transit.hereapi.com/v8/stations?in=${userCoords}&apiKey=${apiKey}`)
    .then((res) => {
      for (const station of res.data.stations) {
        console.log("Station name: ", station.place.name)
        console.log("Station location: ", station.place.location)
        console.log("Station ID: ", station.place.id)
      }
    })
}

module.exports = {
  getStationSchedule,
  getNearbyStations,
}