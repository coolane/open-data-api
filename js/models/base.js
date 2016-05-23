class Base {
  constructor(arguments) {
    this.arguments = {};
    if (typeof(arguments) == 'object') {
      this.arguments = arguments;
    } else if (typeof(arguments) != 'undefined' && arguments != null) {
      console.error('Invalid arguments provided to model constructor', typeof(arguments))
    }
    
  }
  
  private extractColumns() {  
    
  }
}