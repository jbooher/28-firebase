import angular from 'angular';

import config from './config';
import controller from './controllers/todoController';

let todos = angular.module('jb.todos', []);

todos.config(config);
todos.controller('TodoController', controller);

export default todos;
