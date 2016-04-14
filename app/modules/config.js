function config($stateProvider) {
  $stateProvider
    .state('index', {
      url: '/',
      controller: 'TodoController as todoCtrl',
      template: require('./views/todoView.html')
    });
}

export default config;
