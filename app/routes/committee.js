import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var url = 'https://congress.api.sunlightfoundation.com/committees?apikey=0613f3c5dde44d699a1a8c7adb2e6ed7&parent_committee_id=' + params.committee_id;
    return Ember.$.getJSON(url).then(function (responseJSON) {
      var sub_committees = [];
      responseJSON.results.forEach(function (sub_committee) {
        sub_committees.push(sub_committee);
      });
      return sub_committees.length > 0 ? sub_committees : [{ "name": 'There are no sub-committees for this committee.' }];
    });
  }
});
