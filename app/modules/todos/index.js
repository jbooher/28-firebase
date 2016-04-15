import angular from 'angular';

import config from './config';
import todoController from './controllers/todoController';
import listController from './controllers/listController';

let todos = angular.module('jb.todos', []);

todos.config(config);
todos.controller('TodoController', todoController);
todos.controller('ListController', listController);

export default todos;
