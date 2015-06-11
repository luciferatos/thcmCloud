var empreendimentos = require('cloud/controllers/empreendimentos.server.controller.js');

module.exports = function(app){
  app.get('/api/empreendimentos', empreendimentos.list);
  app.post('/api/empreendimentos', empreendimentos.create);
  app.get('/api/empreendimentos/:id', empreendimentos.show);
  app.put('/api/empreendimentos/:id', empreendimentos.update);
  app.delete('/api/empreendimentos/:id', empreendimentos.delete);
};
