import Ember from "ember"

/**
* @param {Moment} distance
*/
export default Ember.HTMLBars.makeBoundHelper(function (utcDate) {
  return utcDate[0].from(Date.now());
})