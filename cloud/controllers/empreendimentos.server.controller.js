var Empreendimento = Parse.Object.extend("Empreendimentos");

exports.list = function(req, res){
  var query = new Parse.Query(Empreendimento);
  query.find({
    success: function(results) {
      res.json(results);
    },

    error: function(error) {
      res.status(400).send({
        message: error
      });
    }
  });
};
