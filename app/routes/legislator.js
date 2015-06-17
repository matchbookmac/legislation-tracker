import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var url = 'https://congress.api.sunlightfoundation.com/legislators?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&bioguide_id=' + params.legislator_id;
    return Ember.$.getJSON(url).then(function (responseJSON) {
      var legislators = [];
      responseJSON.results.forEach(function (legislator) {
        legislators.push(legislator);
      });
      return legislators.length > 0 ? legislators : [{ "description": 'This legislator does not exist' }];
    });
  }
});
