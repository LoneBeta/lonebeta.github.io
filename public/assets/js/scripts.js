var ForecastController = function(city)
{
  this.city = city
  this.get_forecasts();
}
ForecastController.prototype.forecasts = {};
ForecastController.prototype.weather_icons = {};

ForecastController.prototype.get_forecasts = function()
{
  var _this = this;

  $.ajax(
  {
    url: "http://api.openweathermap.org/data/2.5/forecast?q="+this.city+",GB&units=metric&appid=383e645bfd5f3e575f54400d5962da08",
  })
  .done(function(data)
  {
    _this.create_forecasts(data.list);
  });
}

ForecastController.prototype.create_forecasts = function(forecasts)
{
  _this = this;
   this.clear_dom();

  $.each(forecasts,function(index, forecast)
  {
    _this.store_forecast(forecast);
  });

  $.each(this.forecasts,function(index, forecast)
  {
    var weather_forecast = new WeatherForecast(forecast);
    var weather_icon     = new WeatherIcon(forecast);
  });
}

ForecastController.prototype.store_forecast = function(forecast)
{
  var date = forecast.dt_txt
                     .substring(0,10)
                     .replace(/\-/g, '');

  this.forecasts[date] = forecast;
}

ForecastController.prototype.clear_dom = function(forecast)
{
  $('#weather-forecasts').empty();
}

var WeatherForecast = function(forecast)
{
  this.add_to_dom(forecast);
}

WeatherForecast.prototype.add_to_dom = function(forecast)
{
  $('#weather-forecasts').append( this.get_forecast_container(forecast) );
}

WeatherForecast.prototype.get_forecast_container = function(forecast)
{
  var weather_date = new Date(forecast.dt_txt);
  var month        = this.months_matrix[weather_date.getMonth()];
  var day          = this.days_matrix[weather_date.getDay()];
  var date         = weather_date.getDate();
  var description  = forecast.weather[0].description;
  var wind_speed   = forecast.wind.speed;
  var temperature  = Math.round(forecast.main.temp);
  var humidity     = forecast.main.humidity

  var forecast_container = $('#utility-container .weather-forecast').clone();
      forecast_container.attr("id",forecast.dt);
      forecast_container.find(".skycon_icon").attr("id","icon_"+forecast.dt);
      forecast_container.find(".weather-forecast-month").html(month);
      forecast_container.find(".weather-forecast-day").html(day);
      forecast_container.find(".weather-forecast-date").html(date);
      forecast_container.find(".weather-forecast-description").html(description);
      forecast_container.find(".weather-forecast-wind-speed").html(wind_speed);
      forecast_container.find(".weather-forecast-temperature").html(temperature);
      forecast_container.find(".weather-forecast-humidity").html(humidity);

  return forecast_container;
}

WeatherForecast.prototype.months_matrix = {
  0: "January",
  1: "Febuary",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
}

WeatherForecast.prototype.days_matrix = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
}
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