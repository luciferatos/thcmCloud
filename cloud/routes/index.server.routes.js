module.exports = function(app){
  var index = require('cloud/controllers/index.server.controller.js');


  app.get('/', index.render);

  app.get('/hello', index.render);

  app.post('/hello', index.render);


};
