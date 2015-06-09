var Empreendimento = Parse.Object.extend("Empreendimentos");

exports.list = function(req, res){
  var query = new Parse.Query(Empreendimento);
    query.find().then(function(results) {
      console.log(results);
      res.json(results);
    },
    function() {
      res.send(500, 'Falha ao carregar os empreendimentos');
    });
};
