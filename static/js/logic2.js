function init() {

    // Creating a promise to read the data I will be using
        let Promise = d3.csv('././Resources/state_names.csv');
    
        console.log('Data Promise:', Promise)
    
    // Reading the json file and grabbing the names to put into the dropdown menu and selecting the dropdown menu from html - #selDataset
        d3.csv('././Resources/state_names.csv').then(function (data) {
          console.log(data)
    
        //     let dropdownMenu = d3.select('#selDataset');
          let states = (data.State);
          console.log('States:', states)
        //     states.forEach((states) => {
        //         dropdownMenu.append('option').text(states).property('value', states);        
        // });

    
    // Using the first sample in the list and creating initial charts and data
            // let beginState = states[0];
    
            // buildRadar(beginState);
            // buildBar(beginState);
            // buildScatter(beginState);
        });
    }
    
    // Creating a function to change charts upon #selDataset dropdown change
    function optionChanged(stateX) {
        buildRadar(stateX);
    }
    
    init();

    function buildRadar(states) {
      d3.csv('././Resources/state_names.csv').then(function (data2) {
        console.log(data2)

        let pci = (data2.per_capita_income)
        let houseI = (data2.household_income)
        let familyI = (data2.family_income)
        console.log(pci)
    

      let stuff = {
        labels: [
          'Per Capita Income',
          'Household Income',
          'Family Income',
        ],
        datasets: [{
          label: 'Per Capita Income',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'HouseHold Income',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }, {
          label: 'Family Income',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      };


      let config = {
        type: 'radar',
        data: stuff,
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
      }
    });
  }
