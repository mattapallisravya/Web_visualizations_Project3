d3.csv("final_merged_dataset.csv", function(data){
  console.log('Promise: ', data)
});

function createGraphs(state) {
  // Plotly.d3.csv("final_merged_dataset.csv", function(data){
  //   console.log('Promise: ', data);
    var states = Array.from(new Set(data.map(row => row.state)));
    // var traces = [];
    // states.forEach(function(state){

        var filteredData = data.filter(row => row.state_name == state);
        var murder = filteredData.map(row => row.murder).sum();
        var robbery = filteredData.map(row => row.robbery).sum();
        var rape = filteredData.map(row => row.rape).sum();
        var assault = filteredData.map(row => row.aggravated_assault).sum();
        var burglary = filteredData.map(row => row.burglary).sum();
        var larceny = filteredData.map(row => row.larceny).sum();
        var grand_theft = filteredData.map(row => row.motor_theft).sum();
        var arson = filteredData.map(row => row.arson).sum();
        var y = 16000
        var trace = {
          x: x,
          y: y,
          // mode: 'markers',
          // type: 'scatter',
          name: state
      };
    // });
  // });
    function optionChanged (sampleX) {
      // const line = document.getElementById('line');
      // const bar = document.getElementById('bar');
      // const pie = document.getElementById('pie');
      changeline(sampleX);
      changebar(sampleX);
      changepie(sampleX)
    }
    // });

    line.addEventListener('click', changeline);
    bar.addEventListener('click', changebar);
    pie.addEventListener('click', changepie);

  // let geoData = '';
    // });

    const ctx = document.getElementById('myChart');
    const myChart = new myChart(ctx, {
      type: 'bar',
      data: {
        labels: ['MURDER', 'RAPE', 'ROBBERY', 'ASSULT', 'BURGLARY', 'LARCENY', 'MVTHEFT', 'ARSON',],
        datasets: [{
          label: 'Crime Rate',
          data: [murder, rape, robbery, assault, burglary, larceny, grand_theft, arson],
          backgroundColor: ['black', 'red', 'blue', 'green', 'lightblue', 'yellow', 'lightgreen', 'grey',],
          borderWidth: 15
      }]
    // });
    },
      options: {
        scales: {
          y: {
            beginAtZero: true
        }
      }
    }
  });
  };

function changeline(){

    const updatetype = 'line';
    myChart.config.type = updatetype;
    myChart.update();
    const barColors = [
]
};

function changebar(){

    const updatetype = 'bar';
    myChart.config.type = updatetype;
    myChart.update();
};

function changepie(){

  const updatetype = 'pie';
  myChart.config.type = updatetype;
  myChart.update();
};
// Plotly.newPlot('plots1', traces, layout, {responsive: true});
