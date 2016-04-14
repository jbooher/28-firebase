import angular from 'angular';
import uiRouter from 'angular-ui-router';

import firebase from 'firebase';
import angularFire from 'angularfire';

import todos from './modules';

let App = angular.module('app', [
  'ui.router',
  'firebase',

  'jb.todos'
]);
