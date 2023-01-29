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

const api_url = "https://web-visualization-project.onrender.com/crime_data";



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
    color: "darkblue",
    weight: .7
  }).addTo(stateLine);
  // stateLine.addTo(myMap);
});

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
  zoom: 3,
  layers: [topo, stateLine]
});

L.control.layers(baseMaps, overlayMap, {
  collapsed: false
}).addTo(myMap);

d3.json(api_url).then(function(data3) {
  console.log(api_url)
  // Create a new choropleth layer.
  geojson = L.choropleth(data3, {
    // Define which property in the features to use.
    valueProperty: "crime_rate_per_100000",
    // Set the color scale.
    scale: ["#FFFFB2", "#B10026"],
    // The number of breaks in the step range
    steps: 10,
    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },
    // Binding a popup to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<strong>" + county + "</strong><br /><br />Estimated employed population with children age 6-17: " +
      crime_rate_per_100000 + "<br /><br />Estimated Total Income and Benefits for Families: $" + population_x);
    }
  }).addTo(myMap);
});

