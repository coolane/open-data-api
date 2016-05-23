class CreateRouteCommand {
  constructor(app) {
    this.app = app;
  }
  execute(method, path, controller, action) {
    var response_chain = [];
    if (controller.before) {
      this.callbackToMethodChain(controller.before, controller, response_chain)
    }
    response_chain.push(controller[action]);
    if (controller.after) {
      this.callbackToMethodChain(controller.after, controller, response_chain);
    }
    this.app[method](path, response_chain);
  }
  callbackToMethodChain(callback, object, method_chain) {
    if (typeof(callback) == 'string') {
      method_chain.push(object[callback])
    } else if (typeof(callback) == 'function') {
      method_chain.push(callback)
    } else if (typeof(callback) == 'object') {
      method_chain.concat(callback);
    } else {
      console.error("Invalid callback type for object " + object);
    }
  }
}
module.exports = CreateRouteCommand;