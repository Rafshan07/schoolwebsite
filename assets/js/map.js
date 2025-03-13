function initMap() {
  var location = { lat: -6.914744, lng: 107.60981 }; // Change to actual coordinates

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "SMP Negeri 1 Cibadak",
  });
}


