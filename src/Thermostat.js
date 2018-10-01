'use strict';

function Thermostat() {
  this.MIN_TEMP = 10;
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.up = function(degrees) {
  return this.temperature += degrees;
}

Thermostat.prototype.down = function(degrees) {

   // if (this.temperature - degrees < this.MINIMUM_TEMPERATURE) {
   //   return this.temperature = this.MINIMUM_TEMPERATURE;
   // } else {
   //   return this.temperature -= degrees;
   // }
   var result = this.temperature - degrees
   return this.temperature = (result < this.MIN_TEMP) ? this.MIN_TEMP : result;

}
