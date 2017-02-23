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
