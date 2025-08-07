var getLocation = document.querySelector("button");

getLocation.addEventListener("click", function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log("Latitude: " + latitude + ", Longitude: " + longitude);
        console.log("Latitude: " + latitude + ", Longitude: " + longitude);
        window.open(
          "https://www.google.com/maps/@?api=1&map_action=map&center=" +
            latitude +
            "," +
            longitude +
            "&zoom=14&basemap=roadmap",
          "_blank"
        );
      },
      function (error) {
        console.error("Error occurred while retrieving location: ", error);
        alert("Unable to retrieve your location. Please try again.");
      }
    );
  } else {
    alert("Geolocati+on is not supported by this browser.");
  }
});
