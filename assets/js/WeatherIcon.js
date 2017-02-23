var WeatherIcon = function(forecast)
{
  this.id   = forecast.dt;
  this.date = forecast.dt_txt.substring(0,10);
  this.icon = this.icon_matrix[ forecast.weather[0].main ];

  var skycons = new Skycons({"color": "black"});
      skycons.add("icon_"+this.id, Skycons[ this.icon ]);
      skycons.play();
}

WeatherIcon.prototype.icon_matrix = {
  Clear: "CLEAR_DAY",
  Clear_night: "CLEAR_NIGHT",
  Partly_cloud_day: "PARTLY_CLOUDY_DAY",
  Partly_cloud_night: "PARTLY_CLOUDY_NIGHT",
  Cloudy: "CLOUDY",
  Rain: "RAIN",
  Sleet: "SLEET",
  Snow: "SNOW",
  Wind: "WIND",
  Fog: "FOG"
}
