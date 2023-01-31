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

let api_url = "https://web-visualization-project.onrender.com/project_data";

// let crime_data = 

// let geo_data = requests.get(api_url).json()

let myMap = L.map("map", {
  center: [37.7749, -100.4194],
  zoom: 3,
  layers: [topo, stateLine]
});

d3.json(countyGeo).then(data => {
  console.log(data);
  L.geoJSON(data, {
    color: "black",
    weight: .7
  }).addTo(countyLine)
});

d3.json(stateGeo).then(data2 => {
  console.log(data2);
  L.geoJSON(data2, {
    color: "white",
    weight: 4
  }).addTo(stateLine)
});

// let baseMaps = {
//   'Street': street,
//   'Topo': topo
// };

// let overlayMap = {
//   'County Line': countyLine,
//   'State Line': stateLine,
//   'Heat Map': heatArray,
// };

// let myMap = L.map("map", {
//   center: [37.7749, -100.4194],
//   zoom: 3,
//   layers: [topo, stateLine]
// });

// L.control.layers(baseMaps, overlayMap, {
//   collapsed: false
// }).addTo(myMap);

let crimegeo;

// let api = api_url.json();

// d3.json(api_url).then(function(data3) {
d3.json(api_url).then(response => {
  // console.log(data3);
  // console.log(data3[0]);

// d3.csv('././final_merged_dataset.csv').then(function (data3) {
//   console.log(data3.columns);
//   for (var i = 0; i < data3.length; i++) {

// let crime_rate = (api_url[i].crime_rate_per_100000);

// let url = '././final_merged_dataset.csv';
let heatArray = L.layerGroup();

// d3.json(api_url).then(data3 => {
//   console.log(data3);
//   L.geoJSON(data3, {
//     color: "red",
//     weight: 20
//   }).addTo(heatArray)
// });


d3.json(api_url).then(response => {
  let heatArray =[];
  let crime = api_url.crime_rate_per_100000

  response.forEach(location => heatArray.push([location.lat, location.lng]));
  
  let heat = L.heatLayer(heatArray, {
    radius:crime,
    blur:35,
    // size: crime
  }).addTo(myMap);
});

let baseMaps = {
  'Street': street,
  'Topo': topo
};

let overlayMap = {
  'County Line': countyLine,
  'State Line': stateLine,
  'Heat Map': heatArray,
};

L.control.layers(baseMaps, overlayMap, {
  collapsed: false
}).addTo(myMap);
});



