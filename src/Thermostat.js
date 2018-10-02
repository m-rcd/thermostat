'use strict';

function Thermostat() {
  this.MIN_TEMP = 10;
  this.temperature = 20;
  this.savingMode = true;
  this.MAX_TEMP = 25;
  this.LOW_USAGE = 18;
  this.MEDIUM_USAGE = 25;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(degrees) {
  if (this.isPowerSavingOn() === false) {
     this.MAX_TEMP = 32;
  };
  if (this.temperature + degrees > this.MAX_TEMP) {
     return this.temperature = this.MAX_TEMP;
  };
 this.temperature += degrees;
};

Thermostat.prototype.down = function(degrees) {
   var result = this.temperature - degrees
   return this.temperature = (result < this.MIN_TEMP) ? this.MIN_TEMP : result;
};

Thermostat.prototype.isPowerSavingOn = function() {
  return this.savingMode === true;
};

Thermostat.prototype.switchPowerSavingOff = function() {
  this.savingMode = false;
};

Thermostat.prototype.switchPowerSavingOn = function() {
  this.savingMode = true;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.usage = function() {
  if (this.temperature < this.LOW_USAGE) {
    return 'low-usage'
  } else if (this.temperature < this.MEDIUM_USAGE) {
    return 'medium-usage'
  };
    return 'high-usage'
  
};
