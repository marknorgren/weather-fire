import Ember from "ember";

/**
* @param {Moment} distance
*/
export default Ember.HTMLBars.makeBoundHelper(function (humidityTemperatureArray) {
  var difference = humidityTemperatureArray[1] - humidityTemperatureArray[0];
  return difference.toPrecision(2);
});
