$( document ).ready(function() {

  $('.write_code').submit(function(e) {
    $('.output').text("working!");
    // console.log(e);
    e.preventDefault();
    // var value = $( ".input_form" ).val();
    // thermostat.increase(parseInt(value))
    // updateTemperature()
    // updateMode();
    // updateUsage();
    // thermostat.maxTemperatureAlert()
  })

})
