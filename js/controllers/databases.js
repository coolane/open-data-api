var Database = require('../models/database');
var ApplicationController = require("./application");

class DatabaseController extends ApplicationController {
  before(req, res, next) {
    if (req.params && req.params.id) {
      //TODO: implement database.find and assign result to this.database
    }
  }
  show(req, res, next) {
    "use strict";
    
  }
  edit(req, res, next) {
    "use strict";
    
  }
  update(req, res, next) {
    "use strict";
    
  }
  newForm(req, res, next) {
    "use strict";
      
  }
  create(req, res, next) {

  }
  destroy(req, res, next) {
    
  }
};

module.exports = DatabaseController;