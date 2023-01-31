Plotly.d3.csv("final_merged_dataset.csv", function(data){
    console.log('data',data)  
    var states = Array.from(new Set(data.map(row => row.state)));
    var traces = [];
    states.forEach(function(state){
        var filteredData = data.filter(row => row.state == state);
        console.log('filteresData',filteredData)
        
        //var y = filteredData.map(row => row.total_violent_crime);
        var murder = filteredData.map(row => parseInt(row.murder)).reduce((a,b)=>a+b,0);
        var robbery = filteredData.map(row =>  parseInt(row.robbery)).reduce((a,b)=>a+b,0);
        var rape = filteredData.map(row =>  parseInt(row.rape)).reduce((a,b)=>a+b,0);
        var aggravated_assault = filteredData.map(row =>  parseInt(row.aggravated_assault)).reduce((a,b)=>a+b,0);
        var burglary = filteredData.map(row =>  parseInt(row.burglary)).reduce((a,b)=>a+b,0);
        var larceny = filteredData.map(row =>  parseInt(row.larceny)).reduce((a,b)=>a+b,0);
        var motor_theft = filteredData.map(row =>  parseInt(row.motor_theft)).reduce((a,b)=>a+b,0);
        var arson = filteredData.map(row =>  parseInt(row.arson)).reduce((a,b)=>a+b,0);
        var y = [murder,rape,robbery,aggravated_assault,burglary,larceny,motor_theft,arson]
        //var x = filteredData.map(row => row.household_income);
        var x = ["murder","rape","robbery","aggravated_assault","burglary","larceny","motor_theft","arson"]
        ;
        var trace = {
            x: x,
            y: y,
            mode: 'markers',
            type: 'bar',
            name: state,
          
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
    console.log('traces',traces)
    var layout = {
        updatemenus: updatemenus,
        xaxis: {
            title: 'Crimes'
        },
        yaxis: {
            title: 'Total Violent Crime'
        },
        title: states[0]
    };
Plotly.newPlot('logic', traces, layout, {responsive: true});
});