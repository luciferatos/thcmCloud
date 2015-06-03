exports.render = function(req, res){

  var message = req.body.message ? req.body.message : "Bem-vindo ao THCM";

  /*res.render('hello', {
    message: message
  });*/

  res.json(message);
};
