import EmberRouter from '@ember/routing/router';
import config from 'frontend-finance-tracker/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index');

  this.route('login');

  this.route('authenticated', { path: '' }, function () {
    this.route('settings');
    this.route('expenses');
    this.route('test1');
    this.route('test2');
  });
  this.route('unprotected');
  this.route('books');
  this.route('authors');

  this.route('404', { path: '/*path' });
});
