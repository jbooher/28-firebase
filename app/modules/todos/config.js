function config($stateProvider) {
  $stateProvider
    .state('lists', {
      url: '/',
      controller: 'ListController as listCtrl',
      template: require('./views/listView.html')
    })
    .state('todos', {
      url: '/:id',
      controller: 'TodoController as todoCtrl',
      template: require('./views/todoView.html')
    });
}

export default config;
