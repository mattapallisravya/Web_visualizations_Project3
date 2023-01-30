Plotly.d3.csv("output1.csv", function(data){
    
    var states = Array.from(new Set(data.map(row => row.state)));
    var traces = [];
    states.forEach(function(state){
        var filteredData = data.filter(row => row.state == state);
        var x = filteredData.map(row => row.household_income);
        var y = filteredData.map(row => row.total_violent_crime);
        var trace = {
            x: x,
            y: y,
            mode: 'markers',
            type: 'scatter',
            name: state
        };
        traces.push(trace);
      });
      
      var updatemenus = [{
        x: 0.1,
        y: 1,
        yanchor: 'top',
        buttons: states.map(function(state, i){
        return {
            method: 'update',
            label: state,
            args: [{visible: Array(traces.length).fill(false).map((x,j) => j == i)}, {title: state}]
        }
        })
    }];
    var layout = {
        updatemenus: updatemenus,
        xaxis: {
            title: 'Household Income'
        },
        yaxis: {
            title: 'Violent Crime'
        },
        title: states[0]
    };
Plotly.newPlot('plots1', traces, layout, {responsive: true});
});