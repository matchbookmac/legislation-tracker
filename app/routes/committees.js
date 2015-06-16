import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var urls = ['https://congress.api.sunlightfoundation.com/committees?chamber=house&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7', 'https://congress.api.sunlightfoundation.com/committees?chamber=senate&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7', 'https://congress.api.sunlightfoundation.com/committees?chamber=joint&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7'];
    var house = Ember.$.getJSON(urls[0]).then(function (responseJSON) {
      var committees = [];
      responseJSON.results.forEach(function (committee) {
        committees.push(committee);
      });
      return committees;
    });
    var senate = Ember.$.getJSON(urls[1]).then(function (responseJSON) {
      var committees = [];
      responseJSON.results.forEach(function (committee) {
        committees.push(committee);
      });
      return committees;
    });
    var joint = Ember.$.getJSON(urls[2]).then(function (responseJSON) {
      var committees = [];
      responseJSON.results.forEach(function (committee) {
        committees.push(committee);
      });
      return committees;
    });
    var chambers = [house, senate, joint];
    return chambers;
  }
});
