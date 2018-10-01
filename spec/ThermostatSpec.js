describe ('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with a temperature = 20 degree', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })

  it('increases temperature', function() {
    expect(thermostat.up(1)).toEqual(21)
  })
})
