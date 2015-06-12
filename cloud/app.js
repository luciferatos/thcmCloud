
// These two lines are required to initialize Express in Cloud Code.
var express = require('express')
  , moment = require('moment')
  , _ = require('underscore')
  , errors = require('cloud/components/errors/index.js')
  , app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());
app.use(express.methodOverride());    // Middleware for reading request body

// This is an example of hooking up a request handler with a specific request
// path and HTTP verb using the Express routing API.

require('cloud/routes/index.server.routes.js')(app);
require('cloud/routes/empreendimentos.server.routes.js')(app);

// All undefined asset or api routes should return a 404
//app.get('/:url(api|auth|components|app|bower_components|assets)/*', errors[404]);

// All other routes should redirect to the index.html
/*app.get('/*', function(req, res) {
  res.sendfile('/index.html');
});*/

// // Example reading from the request query string of an HTTP get request.
// app.get('/test', function(req, res) {
//   // GET http://example.parseapp.com/test?message=hello
//   res.send(req.query.message);
// });

// // Example reading from the request body of an HTTP post request.
// app.post('/test', function(req, res) {
//   // POST http://example.parseapp.com/test (with request body "message=hello")
//   res.send(req.body.message);
// });

// Attach the Express app to Cloud Code.
app.listen();
