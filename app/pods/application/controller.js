// application controller
//

import Ember from 'ember';


export default Ember.Controller.extend({
  "attributes": Ember.computed("model", function() {
    return this.get("model").map(function(item, index, array) {
      return item.toJSON();
    })
  })
});
