describe ('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with a temperature = 20 degree', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })

  it('increases temperature', function() {
    thermostat.up(1)
    expect(thermostat.getCurrentTemperature()).toEqual(21)
  })

  it('decreases temperature', function() {
    thermostat.down(1)
    expect(thermostat.getCurrentTemperature()).toEqual(19)
  })
})
