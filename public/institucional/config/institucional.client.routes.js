angular.module('institucional').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/institucional', {
      templateUrl: 'institucional/views/institucional.client.view.html',
      controller: 'InstitucionalController'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
]);
