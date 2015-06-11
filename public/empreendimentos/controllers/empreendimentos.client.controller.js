angular.module('empreendimentos').controller('EmpreendimentosController', ['$scope', '$timeout', 'Empreendimentos',
  function($scope, $timeout, Empreendimentos) {

    $scope.thcmData = new Firebase("https://scorching-inferno-3334.firebaseio.com/Testes");

    $scope.testeThcm = "";
    $scope.numQualquer = 0;
    $scope.todosTestes = {};

    $scope.salvaTeste = function(){
      $scope.thcmData.push({
        nome_teste: $scope.testeThcm,
        numQualquer: $scope.numQualquer
      });
      $scope.testeThcm = "";
      $scope.numQualquer = 0;
    };

    //CRUD começa aqui embaixo
    $scope.listar = function(){
      $scope.empreendimentos = Empreendimentos.query();
      console.log($scope.empreendimentos);
    };

    $scope.thcmData.on('value', function(snapshot){
      $timeout(function(){
        $scope.todosTestes = snapshot.val();
      });

      //$scope.todosTestes = snapshot.val();
      //$scope.$apply();
    });

  }
]);
