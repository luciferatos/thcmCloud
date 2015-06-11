/* @flow */
var _ = require('underscore')
  , Empreendimento = Parse.Object.extend("Empreendimentos");

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

exports.create = function(req, res){
  var emp = new Empreendimento();

  // Explicitly specify which fields to save to prevent bad input data
  emp.save(_.pick(req.body, 'CAMPOS', 'AQUI')).then(function() {
    res.redirect('/api/empreendimentos');
  },
  function() {
    res.send(500, 'Erro ao salvar o novo Empreendimento');
  });
};

exports.show = function(req, res) {
  var empQuery = new Parse.Query(Empreendimento);
  var empAchado;
  empQuery.get(req.params.id).then(function(empreendimento) {
    res.json(empreendimento)
  },
  function() {
    res.send(500, 'Empreendimento não encontrado');
  });
};


exports.update = function(req, res) {
  var empQuery = new Parse.Query(Empreendimento);
  query.get(req.params.id).then(function(empreendimento) {
    if (empreendimento) {

      var emp = new Empreendimento();
      emp.id = empreendimento.id;
      emp.save(_.pick(req.body, 'campos', 'aqui')).then(function() {
        res.redirect('/api/empreendimentos/' + emp.id);
      },
      function() {
        res.send(500, 'Falha em atualizar Empreendimento');
      });

    } else {
      res.send('Empreendimento especificado não existe')
    }
  },
  function() {
    res.send(500, 'Falha ao encontrar Empreendimento');
  });
};

// Delete a post corresponding to the specified id.
exports.delete = function(req, res) {
  var empQuery = new Parse.Query(Empreendimento);
  query.get(req.params.id).then(function(empreendimento) {
    if (empreendimento) {

      var emp = new Empreendimento();
      emp.id = empreendimento.id;
      emp.destroy().then(function() {
        res.redirect('/api/empreendimentos');
      },
      function() {
        res.send(500, 'Falha ao deletar o empreendimento');
      });

    } else {
      res.send('Empreendimento especificado não existe')
    }
  },
  function() {
    res.send(500, 'Falha ao encontrar Empreendimento');
  });
};
