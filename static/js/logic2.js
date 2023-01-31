function init() {

    // Creating a promise to read the data I will be using
        let Promise = d3.csv('././Resources/state_names.csv');
    
        console.log('Data Promise:', Promise)
    
    // Reading the json file and grabbing the names to put into the dropdown menu and selecting the dropdown menu from html - #selDataset
        d3.csv('././Resources/state_names.csv').then(function (data) {
          console.log(data);
          console.log(data.columns);
    
          for (var i = 0; i < data.length; i++) {

          let states = (data[i].State);
          let dropdownMenu = d3.select('#selState');
          console.log(states);
          dropdownMenu.append('option').text(states).property('value', states);        
          }
        // });

        // d3.json('./final_merged_dataset.csv').then(function (data2) {
        //   console.log('Counties:', data2);
        //   for (var i = 0; i < data2.length; i++) {

        //     let counties = (data2[i].county);
        //     let dropdownMenu = d3.select('#selCounty');
        //     console.log(counties);
        //     dropdownMenu.append('option').text(counties).property('value', counties);
        //   }
        // });
        // });
    
    // Using the first sample in the list and creating initial charts and data
          // let beginState = states[0][0];
          let beginState = (data[0].State)
          console.log(beginState);
    
            // buildRadar(beginState);
          buildMap(beginState);
          // buildBar(beginState);
          // buildScatter(beginState);
        });
    };
    
    // Creating a function to change charts upon #selDataset dropdown change
    function optionChanged(stateX) {
        buildMap(stateX);
        // buildBar(stateX);
        // buildScatter(stateX);
    }
    
    init();

    function buildMap(states) {
      
    }

    
