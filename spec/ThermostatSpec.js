describe ('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with a temperature = 20 degree', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })
})
