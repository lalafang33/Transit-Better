function initMap() {
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14, 
    center: {lat:49.2573798, lng:-123.4109806},
  }); 

  directionsRenderer.setMap(map);

  document.getElementById("mode").addEventListener("change", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });
}


function calculateAndDisplayRoute(directionsService, directionsRenderer){
  const selectedMode = document.getElementById("mode").value; 
  console.log(selectedMode);
  console.log("CONSOLES RIGHT HERE", document.getElementById("mode"))
  console.log(google.maps);

  directionsService
  .route({
    origin: document.getElementById("from").value,
    destination: document.getElementById("to").value,
    travelMode: google.maps.TravelMode[selectedMode],
  })
  .then((response) => {
    directionsRenderer.setDirections(response);
  })
  .catch((e)=> console.error("Direction request failed" + e)); 
}