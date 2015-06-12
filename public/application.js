var mainApplicationModuleName = 'THCM';

var mainApplicationModule = angular.module(mainApplicationModuleName, [
  'ngResource',
  'ngRoute',
  'empreendimentos',
  'components',
  'institucional'
]);

mainApplicationModule.config(['$locationProvider',
function($locationProvider) {
  $locationProvider.hashPrefix('!');
  //$locationProvider.html5Mode(true);
}
]);

if(window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function(){
  angular.bootstrap(document, [mainApplicationModuleName]);
});

// Mudança proposta---------------------------------------------------------
angular.module('scotchy', [])
    
    .config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl : 'partials/home.html',
                controller : mainController
            })
            .when('/about', {
                templateUrl : 'partials/about.html',
                controller : mainController
            })
            .when('/contact', {
                templateUrl : 'partials/contact.html',
                controller : mainController
            });
    
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });
