function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("US_county_data.js").then((data) => {
      var samplefeatures = data.features;
  
      samplefeatures.forEach((sample) => {
        selector
          .append("option")
          .text(features)
          .property("value", features);
      });
  
      // Use the first sample from the list to build the initial plots
      var firstfeatures = featuresNames[0];
      buildCharts(firstfeatures);
      buildMetadata(firstfeatures);
    });
  }
  
  // Initialize the dashboard
  init();
  
  function optionChanged(newfeatures) {
    // Fetch new data each time a new sample is selected
    buildMetadata(newfeatures);
    buildCharts(newfeatures);

  }
  