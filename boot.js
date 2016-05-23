var pg = require('pg');
var conString = process.env.DATABASE_URL;

module.exports = function() {
  "use strict";
  var Bootstrap = {
    config: {db: {}, routes: {}},
    app: null,
    boot: function(app) {
      "use strict";
      this.app = app;
      if (establishPgConnection() && loadRoutes()) {
        console.info('Application booted...')
        var server = app.listen(8080, function() {
          "use strict";
          var host = server.address().address;
          var port = server.address().port;

          console.log("App listening at http://%s:%s", host, port);
        });
      }
    }
  };

  var establishPgConnection = function() {
    "use strict";
    console.info('Attempting to establish postgres connection...');
    // Initialize a connection pool
    pg.connect(conString, function (err, client, done) {
      if (err) {
        console.error('BOOT ERROR: could not fetch client from pool', err);
        return false;
      } else {
        console.info('DB connection established');
        Bootstrap.config['db']['client'] = client;
      }
    });
    return true;
  };
  var loadRoutes = function() {
    "use strict";
    require('./js/routes')(Bootstrap);
    return true;
  };

  return Bootstrap;
};


