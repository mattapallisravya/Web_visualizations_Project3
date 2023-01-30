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

let baseMaps = {
  'Street': street,
  'Topo': topo
};

let overlayMap = {
  'County Line': countyLine,
  'State Line': stateLine,
};

// let myMap = L.map("map", {
//   center: [37.7749, -100.4194],
//   zoom: 3,
//   layers: [topo, stateLine]
// });

L.control.layers(baseMaps, overlayMap, {
  collapsed: false
}).addTo(myMap);

let crimegeo;

// let api = api_url.json();

// d3.json(api_url).then(function(data3) {
//   console.log(data3);
//   console.log(data3[0]);

// d3.csv('././final_merged_dataset.csv').then(function (data3) {
//   console.log(data3.columns);
//   for (var i = 0; i < data3.length; i++) {

//     let crime_rate = (data3[i].crime_rate_per_100000);

// let url = '././final_merged_dataset.csv';


d3.json(api_url).then(response => {
  let heatArray=[];


  response.forEach(location => heatArray.push([location.location.coordinates[1],location.location.coordinates[0]]));
  
  let heat = L.heatLayer(heatArray, {
      radius:20,
      blur:35
  }).addTo(myMap);
});


  // };
  // let geodata = (data3.crime_rate_per_100000);
  // console.log(geodata);
  // data3.json();
  // let your_json = url.parse( your_url, true );
  // for (let i = 0; i < data3.length; i++) {

  //   let crime_rate = (data3[i]);
    // console.log(crime_rate);
  // };
  // Create a new choropleth layer.
  // crimegeo = L.choropleth(data3, {
    // Define which property in the features to use.
    // valueProperty: crime_rate,
    // valueProperty: (data3[i].crime_rate_per_100000),
    // Set the color scale.
    // scale: ["#FFFFB2", "#B10026"],
    // The number of breaks in the step range
    // steps: 10,
    // q for quartile, e for equidistant, k for k-means
    // mode: "q",
    // style: {
      // Border color
    //   color: "#fff",
    //   weight: 1,
    //   fillOpacity: 0.8
    // },
    // Binding a popup to each layer
    // onEachFeature: function(feature, layer) {
    //   layer.bindPopup("<strong>County: " + feature.county + "</strong><br/><br/>Crime Rate: " +
    //   feature.crime_rate_per_100000 + "<br/><br/>Population" + feature.population_x);
    // }
  // }).addTo(myMap);
// };
// });

