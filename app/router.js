import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('home', { path: '/' });
  this.resource('legislators', { path: 'legislators' }, function() {
    this.resource('contact', { path: 'contact/:zip' });
  });
  this.resource('bills', { path: 'bills' }, function () {
    this.resource('house-bills', { path: 'house' });
    this.resource('senate-bills', { path: 'senate' });
  })
  this.resource('committees');
});

export default Router;
