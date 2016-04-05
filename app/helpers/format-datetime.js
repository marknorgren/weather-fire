import Ember from "ember";

/**
* @param {Moment} distance
*/
export default Ember.HTMLBars.makeBoundHelper(function (utcDate) {
  if (utcDate[0] instanceof moment) {
    return utcDate[0].format('h:mm:ss a');
  } else {
    return moment(utcDate[0]).format('MM/DD h:mm:ss a z');
  }
});
