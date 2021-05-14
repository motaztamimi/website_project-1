class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      console.log(this.state);
      if( message.includes("hello")){
          this.actionProvider.helloWorldhandler()
      }
      else if ( message.includes("show me list")){
        this.actionProvider.listhandler()
      }
      else{
        this.actionProvider.erorhandler()
      }
    }
  }
  
  export default MessageParser;