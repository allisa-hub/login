mapboxgl.accessToken = 'pk.eyJ1IjoiYWxsaXNhIiwiYSI6ImNsd2FhMWJxbDBidWkycW04ZGo3NnhtYnoifQ.VLuJ6DXx2ImK8aFQg3tk3A ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [124.7078, 11.2591], // starting position
  zoom: 12
});
// set the bounds of the map
const bounds = [
  [124.6193, 11.2321],
  [124.650696, 11.150007],
  [124.746655, 11.268888],
  [124.653119, 11.397057]
];
map.setMaxBounds(bounds);

// an arbitrary start will always be the same
// only the end or destination will change
const start = [124.7078, 11.2591];

// this is where the code for the next step will go