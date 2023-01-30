d3.csv('latest_final_merged_dataset.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
    var allCountyNames = unpack(rows, 'county'),
        allmurder = unpack(rows, 'murder'),
        allrape = unpack(rows, 'rape'),
        allrobbery = unpack(rows, 'robbery')
        listofCounties = [],
        currentCounty,
        murder = [],
        rape = [],
        robbery = [];


    for (var i = 0; i < allCountyNames.length; i++ ){
        if (listofCounties.indexOf(allCountyNames[i]) === -1 ){
            listofCounties.push(allCountyNames[i]);
        }
    }
    function getCountyData(chosenCounty) {
        murder = [],
        rape = [],
        robbery = [];
        for (var i = 0 ; i < allCountyNames.length ; i++){
            if ( allCountyNames[i] === chosenCounty ) {
                murder.push(allmurder[i]);
                rape.push(allrape[i]),
                robbery.push(allrobbery[i]);
            }
        }
    };
    setBubblePlot("Alexander");
    function setBubblePlot(chosenCounty) {
        getCountryData(chosenCounty);

        var trace1 = {
            x: [murder,rape, robbery ],
            y: [500, 1000, 1500, 2000,2500],
            type: 'bar'
        };

        var data = [trace1];

        var layout = {
            title:'Line and Scatter Plot',
            height: 400,
            width: 480
        };

        Plotly.newPlot('myDiv', data, layout);
    };

    var innerContainer = document.querySelector('[data-num="0"'),
        plotEl = innerContainer.querySelector('.plot'),
        countySelector = innerContainer.querySelector('.countydata');

    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length;  i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }

    assignOptions(listofCounties, countySelector);

    function updateCountry(){
        setBubblePlot(countrySelector.value);
    }

    countrySelector.addEventListener('change', updateCountry, false);
});