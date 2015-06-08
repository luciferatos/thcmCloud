var empreendimentos = require('cloud/controllers/empreendimentos.server.controller.js');

module.exports = function(app){
  app.get('/api/empreendimentos', empreendimentos.list);
  app.post('/api/empreendimentos', empreendimentos.create);
  app.get('/api/empreendimentos/:empreendimentoId', empreendimentos.read);
  app.put('/api/empreendimentos/:empreendimentoId', empreendimentos.update);
  app.delete('/api/empreendimentos/:empreendimentoId', empreendimentos.delete);

  app.param('empreendimentoId', empreendimentos.empByID);
};
