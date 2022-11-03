function initMap() {
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14, 
    center: {lat:49.2712, lng:-123.1340},
  }); 
  directionsRenderer.setMap(map);

  document.getElementById("mode").addEventListener("change", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });

  // Creates new InfoWindow

  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
         
          // sets a pin on your location

          new google.maps.Marker({
            position: pos,
            map,
            title: "Your Location"})
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // If browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
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

// Handles Geolocation errors

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}