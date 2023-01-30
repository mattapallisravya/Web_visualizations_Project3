let myMap = L.map("map", {
    center: [36.7783, -119.4179],
    zoom: 6
    });
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // Load the GeoJSON data. this is the county data, we'll need this in our data to pull from flask?
  
  let Counties = "https://web-visualization-project.onrender.com/project_data";
  let geoData = "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json";
  
  let geojson;
  // let geojson1;
  
  
  d3.json(Counties).then(function(county) {
    d3.json(geoData).then(function(geo) {
    geo.features = geo.features.filter(feature => feature.properties);
      
    
      geojson = L.choropleth(geo, {
        valueProperty: function(feature){
        val = county.filter(counti => counti.FIPS_CTY == feature.COUNTY);
        console.log(val)
        console.log(geo)
        
         console.log (val)
         if(val) {
            return val["crime_rate_rank"]; 
          } else { 
                console.log(feature.id);
                return 0
              }
            
        },
  
      
        scale: ["#ffffb2", "#b10026"],
        steps: 10,
        mode: "q",
          style: {
          // Border color
          color: "#fff",
          weight: 1,
          fillOpacity: 0.8,
      },
  
      onEachFeature: function(feature, layer) {
        layer.on({
          mouseover: function highlightFeature(event) {
            let layer = event.target;
            layer.setStyle({
                weight: 5,
                color: 'black',
                dashArray: '',
                fillOpactity: .9
            });
  
            // layer.bringToFront();
            info.update(layer.feature.properties);
          },
          mouseout: function resetHighlight(event) {
            geojson.resetStyle(event.target);
            info.update();
            },
            
        });
        layer.bindPopup("<strong>" + feature.properties.NAME + "</strong><br /><br />crime rank" + 
        val.map(counti => counti[crime_rate_rank]) );
    
      }
    
      }).addTo(myMap);
  
  
      let legend = L.control({ position: "topleft" });
      legend.onAdd = function() {
        let div = L.DomUtil.create("div", "info legend");
        let limits = geojson.options.limits;
        let colors = geojson.options.colors;
        let labels = [];
    
        // Add the minimum and maximum.
        let legendInfo = "<h5>crime_rank</h5>" +
          "<div class=\"labels\">" +
            "<div class=\"min\">" + limits[0] + "</div>" +
            "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
          "</div>";
    
        div.innerHTML = legendInfo;
    
        limits.forEach(function(limit, index) {
          labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
        });
    
        div.innerHTML += "<ul>" + labels.join("") + "</ul>";
        return div;
      };
    
      // Adding the legend to the map
      legend.addTo(myMap);
    
    })
      
  })