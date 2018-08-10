function attachEvents() {
    const basicUrl = 'https://judgetests.firebaseio.com';
    let inputFieldLocation = $('#location');
    let submitBtn = $('#submit');
    let forecast = $('#forecast');
    let currentForecast = $('#current');
    let upcomingForecast = $('#upcoming');
    submitBtn.on('click', getWeather);
    let weatherSymbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
    };

    function getWeather() {
        forecast.text('');
        let location = inputFieldLocation.val();
        let request = {
            method: 'GET',
            url: basicUrl+'/locations.json',
        };
        if (location !== '') {
            $.ajax(request).then(getLocations).catch(displayError);
        }

        function getLocations(response) {
            let locationCode;
            for (let locationObj of response) {
                if (locationObj['name'] === location) {
                    locationCode = locationObj['code'];
                }
            }
            let currentConditionRequest = $.ajax({
                method: 'GET',
                url: basicUrl + `/forecast/today/${locationCode}.json`
            });
            let threeDaysConditionRequest = $.ajax({
                method: 'GET',
                url: basicUrl + `/forecast/upcoming/${locationCode}.json`
            });
            Promise.all([currentConditionRequest, threeDaysConditionRequest])
                .then(displayTotalCondition)
                .catch(displayError);

            function displayTotalCondition([currCondition, threeDaysCondition]) {
                forecast.attr('style', "display:true");
                appendDataToCurrent();
                appendDataToUpcoming();
                console.log('end');

                //current forecast
                function appendDataToCurrent() {
                    currentForecast.empty();
                    let condition=currCondition['forecast'];
                    let label=$('<div class="label">Current conditions</div>');
                    let span = $(`<span>${weatherSymbols[condition['condition']]}</span>`)  //also html()
                        .addClass('condition symbol');
                    let conditionSpan = $('<span>');
                    conditionSpan.addClass('condition');
                    let forecastNameSpan = $('<span>')
                        .addClass('forecast-data')
                        .text(currCondition['name']);
                    let forecastTempSpan = $(`<span>${condition['low']}&#176;/${condition['high']}&#176;</span>`)
                        .addClass('forecast-data');
                    let forecastConditionSpan = $('<span>')
                        .addClass('forecast-data')
                        .text(`${condition['condition']}`);
                    conditionSpan
                        .append(forecastNameSpan)
                        .append(forecastTempSpan)
                        .append(forecastConditionSpan);
                    currentForecast.append(label);
                    currentForecast.append(span);
                    currentForecast.append(conditionSpan);
                    forecast.append(currentForecast)
                }

                //three days forecast
                function appendDataToUpcoming() {
                    upcomingForecast.empty();
                    let forecastArr=threeDaysCondition['forecast'];
                    upcomingForecast.append($('<div class="label">Three-day forecast</div>'));
                    for(let obj of forecastArr){
                        let upcomingSpan=$('<span>')
                            .addClass('upcoming');
                        upcomingSpan.append($(`<span class="symbol">${weatherSymbols[obj['condition']]}</span>`));
                        upcomingSpan.append($(`<span class="forecast-data">${obj['low']}&#176;/${obj['high']}&#176;</span>`))
                        upcomingSpan.append($(`<span class="forecast-data">${obj['condition']}</span>`))
                        upcomingForecast.append(upcomingSpan);
                    }
                    forecast.append(upcomingForecast)
                }
            }
        }
    }

    function displayError() {
        forecast.text('Error');
    }
}