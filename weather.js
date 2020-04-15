"use strict"

const url = "http://api.openweathermap.org/data/2.5/weather?q=Santo Domingo&appid=b9041d1d914c8697e543d1f47bedd975";

$.ajax ({
    url: url,
    success: function (result){
        console.log(result);
        console.log(result.name);
        // Output the location
        const displayCity = `Current weather in ${result.name}`;
        $("#location").html(displayCity);

        //Display the temperature
        const C = Math.round(result.main.temp - 273.15);
        const displayTemp = `Temperature: ${C}&#176;C`;
        $("#temperature").html(displayTemp);

        //Display the wind
        const windSpeed = Math.round(result.wind.speed * 1.60934);
        const displayWind = `Wind: ${windSpeed} km/h`;
        $("#windSpeed").html(displayWind);

        //Display the sky conditions
        const displaySkyConditions = `Sky conditions: ${result.weather[0].description}`;
        $("#sky").html(displaySkyConditions);
    }
})