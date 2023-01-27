function init() {

    // Creating a promise to read the data I will be using
        let Promise = d3.csv('samples.json');
    
        console.log('Data Promise:', Promise)
    
    // Reading the json file and grabbing the names to put into the dropdown menu and selecting the dropdown menu from html - #selDataset
        d3.json('samples.json').then(function (data) {
    
            let dropdownMenu = d3.select('#selDataset');
            let state = data.state;
            state.forEach((state) => {
                dropdownMenu.append('option').text(state).property('state', state);        
            });
    
    // Using the first sample in the list and creating initial charts and data
            let beginState = state[0];
    
            buildRadar(beginState);
            // buildDemo(beginSample);
            // buildGuage(beginSample)
        });
    }
    
    // Creating a function to change charts upon #selDataset dropdown change
    function optionChanged(stateX) {
        buildRadar(stateX);
    }
    
    init();

    function buildRadar(state) {
      let config = {
        type: 'radar',
        data: data,
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
      }
    };
