import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('current');
  }
});


//setup Controller
// - make ajax request
// - controller.set("wundergroundYesterday", ajaxResults)
