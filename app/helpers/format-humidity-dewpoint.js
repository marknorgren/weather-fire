import Ember from "ember";

/**
* @param {Moment} distance
*/
export default Ember.HTMLBars.makeBoundHelper(function (humidityDewpointArray) {
  var difference = humidityDewpointArray[1] - humidityDewpointArray[0];
  return difference.toPrecision(2);
});
