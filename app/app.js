import angular from 'angular';
import uiRouter from 'angular-ui-router';

import firebase from 'firebase';
import angularFire from 'angularfire';

import todos from './modules/todos';

let App = angular.module('app', [
  'ui.router',
  'firebase',

  'jb.todos'

]);

function config($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}

App.config(config);
