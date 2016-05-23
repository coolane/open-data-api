class ApplicationController{
  //TODO: CSRF protection
  //TODO: Token Authentication
  constructor(db) {
    this.db = db;
  }
  home(req, res) {
    res.json({message: 'Hello world'});
  }
}

module.exports = ApplicationController;