// Store our API endpoint as queryUrl.
const api_url = "https://web-visualization-project.onrender.com/crime_data";
// getData();
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

// let countyGeo = ('https://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_050_00_500k.json');
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
    color: "darkblue",
    weight: .7
  }).addTo(stateLine);
});



// async function getData () {
//   let mygeojson = {"type": "FeatureCollection", "features": []}
//   await fetch(api_url)
//  .then(response => response.json())
//  .then(data => {
//    for(let point of data){
//      let coordinate = [parseFloat(point.lng), parseFloat(point.lat)];
//      let properties = point;
//      delete properties.longitude;
//      delete properties.latitude;          
//      let feature = {"type": "Feature", "geometry": {"type": "Point", "coordinates": coordinate}, "properties": properties}
//      mygeojson.features.push(feature);
//    }
//  })
//  L.geoJson(mygeojson).addTo(myMap);
// //  console.log(mygeojson);
// }
d3.json(api_url).then(function(data) {
  console.log(api_url)
  // Create a new choropleth layer.
  geojson = L.choropleth(data, {
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
      layer.bindPopup("<strong>" + feature.properties.NAME + "</strong><br /><br />Estimated employed population with children age 6-17: " +
        feature.properties.DP03_16E + "<br /><br />Estimated Total Income and Benefits for Families: $" + feature.properties.DP03_75E);
    }
  }).addTo(myMap);




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
  zoom: 11,
  layers: [topo, stateLine]
});

L.control.layers(baseMaps, overlayMap, {
  collapsed: false
}).addTo(myMap);



});


