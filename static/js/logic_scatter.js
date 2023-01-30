Plotly.d3.csv('crime_vs_income.csv', function(data) {

    // var x = [1, 2, 3, 4];
    // var y = [10, 15, 13, 17];

    var x = [];
    var y = [];
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].total_violent_crime);
        console.log(data[i].household_income);
        x.push(data[i].household_income);
        y.push(data[i].total_violent_crime);
    }

    var scatterTrace = {
        x: x,
        y: y,
        mode: 'markers',
        type: 'scatter'
    };
    var bestFitLine = {
        x: x,
        y: x.map(function(xi) {
        return (0.0631* xi); // adjusted to y=0.0631x calculated from excel
        }),
        type: 'line'
    };
    var layout = {
        xaxis: {
        title: 'Household Income'
        },
        yaxis: {
        title: 'Total Violent Crime'
        },
    };
    Plotly.newPlot('scatterPlot', [scatterTrace, bestFitLine], layout);
  });