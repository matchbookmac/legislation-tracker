import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('home', { path: '/' });
  this.resource('legislators', { path: 'legislators' }, function() {
    this.resource('contact', { path: 'contact/:zip' });
    this.resource('legislator', { path: ':legislator_id' });
  });
  this.resource('bills', { path: 'bills' }, function () {
    this.resource('house-bills', { path: 'house' });
    this.resource('senate-bills', { path: 'senate' });
    this.resource('bill', { path: ':bill_id' });
  })
  this.resource('committees', { path: 'committees'}, function() {
    this.resource('house-committees', { path: 'house'});
    this.resource('senate-committees', { path: 'sentate'});
    this.resource('joint-committees', { path: 'joint'});
    this.resource('committee', { path: ':committee_id' });
  });
});

export default Router;
