angular.module('empreendimentos').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'empreendimentos/views/empreendimentos.client.view.html'
    })
    .when('/hello', {
      templateUrl: 'empreendimentos/views/empreendimentos.client.view.html'
    })
    .when('/empreendimentos', {
      templateUrl: 'empreendimentos/views/empreendimentos.client.view.html'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
]);
