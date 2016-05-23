module.exports = function(bootstrap) {
  "use strict";
  var DatabaseController = require('./controllers/databases');
  var ApplicationController = require('./controllers/application');
  var CreateRouteCommand = require('./commands/create_route');

  var databases = new DatabaseController(bootstrap.config.db);
  var application = new ApplicationController(bootstrap.config.db);
  //TODO: Add a resource command for REST resource route generation
  var route = new CreateRouteCommand(bootstrap.app);

  // Route to controllers here
  route.execute('get', '/', application, 'home');
  route.execute('get', '/database/:id', databases, 'show');
  route.execute('get', '/database/new', databases, 'newForm');
  route.execute('get', '/database/:id/edit', databases, 'edit');
  route.execute('post', '/databases', databases, 'create');
  route.execute('put', '/database/:id', databases, 'update');
  route.execute('delete', '/database/:id', databases, 'destroy');
};