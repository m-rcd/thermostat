$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature()

  $('#temperature-up').click(function() {
    thermostat.up()
   updateTemperature()
  });

  $('#temperature-down').click(function() {
    thermostat.down()
    updateTemperature()
  });

  $('#temperature-reset').click(function() {
    thermostat.reset()
    updateTemperature()
  });

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingOn()
    $('#power-saving-status').text('On')
  });

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingOff()
    $('#power-saving-status').text('Off')
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage());
  }

displayWeather('London');
  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })


  function displayWeather(city) {
   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
   var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
   var units = '&units=metric';
   $.get(url + token + units, function(data) {
     $('#current-temperature').text(data.main.temp);
   })
}
})
