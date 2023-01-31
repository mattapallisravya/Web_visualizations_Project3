// Store our API endpoint as queryUrl.
const api_url = "https://web-visualization-project.onrender.com/project_data";
getData();
// Creating the map object
let countyLine= L.layerGroup();

let stateLine= L.layerGroup(); 

// Adding the tile layer
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

let countyGeo = 'https://raw.githubusercontent.com/kjhealy/us-county/master/data/geojson/gz_2010_us_050_00_500k.json';

let stateGeo = 'https://raw.githubusercontent.com/kjhealy/us-county/master/data/geojson/gz_2010_us_040_00_500k.json';


d3.json(countyGeo).then(data => {
  console.log(data);
  L.geoJSON(data, {
    color: "black",
    weight: 1
  }).addTo(countyLine);
  // countyLine.addTo(myMap);
});

d3.json(stateGeo).then(data2 => {
  console.log(data2);
  L.geoJSON(data2, {
    color: "red",
    weight: 5
  }).addTo(stateLine);
});



async function getData () {
  let mygeojson = {"type": "FeatureCollection", "features": []}
  await fetch(api_url)
 .then(response => response.json())
 .then(data => {
   for(let point of data){
     let coordinate = [parseFloat(point.lng), parseFloat(point.lat)];
     let properties = point;
     delete properties.longitude;
     delete properties.latitude;          
     let feature = {"type": "Feature", "geometry": {"type": "Point", "coordinates": coordinate}, "properties": properties}
     mygeojson.features.push(feature);
     //console.log(feature.properties.crime_rate_per_100000)
     
   }
 })
 L.geoJson(mygeojson).addTo(myMap);
  
 //console.log(mygeojson);
}


let baseMaps = {
  'Street': street,
  'Topo': topo
};

let overlayMap = {
  'County Line': countyLine,
  'State Line': stateLine,
};

let myMap = L.map("map", {
  center: [37.7749, -100.4194],
  zoom: 8,
  layers: [topo, stateLine]
});

L.control.layers(baseMaps, overlayMap, {
  collapsed: false
}).addTo(myMap);

onEachFeature: function (feature, layers) {
  layers.bindPopup('<h2>Magnitude: ' + feature.properties.mag + '</h2><hr><h3>Location: '+ feature.properties.place + '</h3><hr><h4>Date: '
  + new Date(feature.properties.time) + '</h4>');
}