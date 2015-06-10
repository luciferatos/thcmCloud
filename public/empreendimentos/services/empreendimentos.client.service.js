angular.module('empreendimentos').factory('Empreendimentos', ['$resource',
function($resource){
  return $resource('/api/empreendimentos/:empreendimentoId', {
    empreendimentoId: '@_id'
  },
  {
    update: 'PUT'
  })
}
]);
