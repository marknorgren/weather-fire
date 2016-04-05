import DS from "ember-data";

//20150504111209
export default DS.Transform.extend({
  deserialize: function(value) {
    console.log('value: ', value);
    var stringToDate = function(dateString) {
      var year = dateString.slice(0,4);
      var month = dateString.slice(4,6);
      var day = dateString.slice(6,8);
      var hour = dateString.slice(8,10);
      var minute = dateString.slice(10,12);
      var second = dateString.slice(12);
      console.log(year, month, day, hour, minute, second);
      //console.log("System time: ", Date.now());
      //console.log("System time momemt: ", moment());

      var date = new Date(year, month-1, day, hour, minute, second);

      return date;
    };
    console.log('stringToDate value: ', stringToDate(value));
    return moment(stringToDate(value));
  }
});