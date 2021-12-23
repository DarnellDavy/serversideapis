var curDate = new Date();
var nextDate = new Date();

function CurrentWeatherData(data) {
    $("#CurTemp").text(KelvinToFahrenheit(data.current.temp) + "°");
    $("#CurWind").text(data.current.wind_speed) + "Mph";
    $("#CurHum").text(data.current.humidity) + "%";
    $("#CurUvi").text(data.current.uvi);
}

function DisplayWeatherData(data) {
    for (var i = 0; i < 5; i++) {
        nextDate.setDate(curDate.getDate() + (i + 1));
        var formattedDate = DateAsMMDDYY(nextDate);
        $("#Day" + (i + 1) + "Date").text(formattedDate);
        var temp = KelvinToFahrenheit(data.daily[i].temp.max);
        $("#Temp" + (i + 1)).text(temp + "°");
        var wind = data.daily[i].wind_speed;
        $("#Wind" + (i + 1)).text(wind + "Mph");
        var humidity = data.daily[i].humidity;
        $("#Humidity" + (i + 1)).text(humidity + "%");
    }
    var cityStrings = "";
    for (var i = 0; i < cities.length; i++) {
        cityStrings = cityStrings + "<li>" + cities[i] + "</li>";
    };
    $("#History").html(cityStrings);
}