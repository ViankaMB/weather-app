"use strict"

const url = "http://api.openweathermap.org/data/2.5/weather?q=Santo Domingo&appid=b9041d1d914c8697e543d1f47bedd975";

$.ajax ({
    url: url,
    success: function (result){
        console.log(result);
        console.log(result.name);

        $("#location").text(result.name);

        const C = Math.round(result.main.temp - 273.15);
        const Celsius = C.toString();
        $("#temperature").text(Celsius);

        const windSpeed = Math.round(result.wind.speed * 1.60934);
        const ws = windSpeed.toString();
        $("#windSpeed").text(ws);

        $("#sky").text(result.weather[0].description);
    }
})