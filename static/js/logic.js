// Creating the map object
let myMap = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 11
  });

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


// Use this link to get the GeoJSON data.
let link = "../Data/US_county_data.json";
// d3.json("Data/US_county_data.json", function(data) {
//     console.log(data);
// });

L.geoJSON(link).addTo(myMap)


// Use this link to get the GeoJSON data.
// let link = "Data/US_county_data.js";
// loading GeoJSON file - Here my html and usa_adm.geojson file resides in same folder
// $.getJSON("US_county_data.geojson",function(data){
//     // L.geoJson function is used to parse geojson file and load on to map
//     L.geoJson(data).addTo(myMap);
//     });

// L.geoJSON(link).addTo(myMap)
// $.getJSON("US_county_data.js", function (data) {
//     var datalayer = L.geoJson(data, {
//         onEachFeature: function (feature, featureLayer) {
//             featureLayer.bindPopup(feature.properties.date);
//         },
//         pointToLayer: function (feature, latlng) {
//             return L.circleMarker(latlng, geojsonMarkerOptions);
//         }
//     }).addTo(map);
//     map.fitBounds(datalayer.getBounds());
// });