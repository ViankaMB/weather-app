"use strict"

const url = "http://api.openweathermap.org/data/2.5/weather?q=Santo Domingo&appid=b9041d1d914c8697e543d1f47bedd975";

$.ajax ({
    url: url,
    success: function (result){
        console.log(result);
        console.log(result.name);

    }
})