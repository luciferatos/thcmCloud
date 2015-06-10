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
      templateUrl: 'empreendimentos/views/listar-empreendimentos.client.view.html'
    })
    .when('/empreendimentos/criar', {
      templateUrl: 'empreendimentos/views/criar-empreendimento.client.view.html'
    })
    .when('/empreendimentos/:empreendimentoId', {
      templateUrl: 'empreendimentos/views/ver-empreendimento.client.view.html'
    })
    .when('/empreendimentos/editar/:empreendimentoId', {
      templateUrl: 'empreendimentos/views/editar-empreendimento.client.view.html'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
]);
