import EmberRouter from '@ember/routing/router';
import config from 'frontend-finance-tracker/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('register');
  this.route('unregister');
  this.route('change-password');
  this.route('login');
  this.route('authenticated', { path: '' }, function () {
    this.route('test1');
    this.route('test2');
  });
  this.route('unprotected');
});
