describe ('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

 describe('#getCurrentTemperature', function() {
   it('starts with a temperature = 20 degree', function() {
     expect(thermostat.getCurrentTemperature()).toEqual(20);
   });
 });

  describe('changes temperature', function() {
    it('increases temperature', function() {
      thermostat.up(1)
      expect(thermostat.getCurrentTemperature()).toEqual(21)
    });

    it('decreases temperature', function() {
      thermostat.down(1)
      expect(thermostat.getCurrentTemperature()).toEqual(19)
    })

    it('minimum temperature 10 degrees', function() {
      thermostat.down(11)
      expect(thermostat.getCurrentTemperature()).toEqual(10)
    });
  });

  describe('power saving mode', function() {
    it('has power saving mode on by default', function() {
      expect(thermostat.isPowerSavingOn()).toBe(true)
    });

    it('switches saving mode off', function() {
      thermostat.switchPowerSavingOff();
      expect(thermostat.isPowerSavingOn()).toBe (false);
    })

    it('switches saving mode on', function() {
      thermostat.switchPowerSavingOn();
      expect(thermostat.isPowerSavingOn()).toBe (true);
    })
  })

  describe('#reset', function() {
    it('resets temperature to 20', function() {
      thermostat.up(3)
      thermostat.reset()
      expect(thermostat.getCurrentTemperature()).toEqual(20)
    })
  })

  describe('maximum temperature', function() {
    it('maximum temperature is 25 when SPM on', function() {
      thermostat.up(6)
      expect(thermostat.getCurrentTemperature()).toEqual(25)
    });

    it('maximum temperature is 32 when SPM off', function() {
      thermostat.switchPowerSavingOff();
      thermostat.up(14);
      expect(thermostat.getCurrentTemperature()).toEqual(32)
    });
  });
});
