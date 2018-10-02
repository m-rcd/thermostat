'use strict';

function Thermostat() {
  this.MIN_TEMP = 10;
  this.temperature = 20;
  this.savingMode = true;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(degrees) {
  return this.temperature += degrees;
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
}
