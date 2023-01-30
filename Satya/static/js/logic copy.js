function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("US_county_data.geojson").then((data) => {
    var sampleSTATE = data.STATE;

    sampleSTATE.forEach((sample) => {
      selector
        .append("option")
        .text(STATE)
        .property("value", STATE);
    });

    // Use the first sample from the list to build the initial plots
    var firstSTATE = STATENames[0];
    buildCharts(firstSTATE);
    buildMetadata(firstSTATE);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSTATE) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSTATE);
  buildCharts(newSTATE);

}

// Function to filter sample data by selected sample  
function selectData(samples) {
  return samples.STATE == STATE;
};

// Loop through Country list and build drop down
function buildDropDown(STATE) {
var dropD = d3.select("select");

for(let i = 0;i<countries.length;i++) {
    var newOption = dropD.append("option").text(STATE[i]);
    newOption.attr("value", STATE[i]);
  };
};

// 8. Create the trace for the bar chart. 
var barData = [{
  x: sampleValue.slice(0,10).reverse(),
  y: yticks,
  type: "bar",
  orientation: "h",
  text: yticks,
  hoverinfo: "text"
}];
// 9. Create the layout for the bar chart. 
var barLayout = {
 title: "Navel Bacteria",
 margin: {
  t: 50,
  l: 150,
 },
 yaxis: {
  title: "Bacteria ID",
 },
 xaxis: {
  title: "Number of Bacteria Present",
 }
};
// 10. Use Plotly to plot the data with the layout. 
Plotly.newPlot("bar", barData, barLayout);
var bubbleData = [{
  x: otuId,
  y: sampleValue,
  text: otuLabel,
  mode: "markers",
  marker: {
    size: sampleValue,
    color: otuId,
    colorscale: "viridis",
  },
  type: "bubble"
}

];


  
