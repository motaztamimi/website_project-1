class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    
    parse(message) {
      
      console.log(this.state.messages[0]);
    const a=this.state.messages[0].message;
      
    /* if ( this.state.message[0].message === "motaz"){
      console.log("aaa");
     }*/
     if ( a === "motaz"){
      this.actionProvider.deleteFirst()
     }
      if( message.includes("hello")){
          this.actionProvider.deleteFirst()
      }
      else if ( message.includes("show me list")){
        this.actionProvider.listhandler()
      }
      else if ( message.includes("يوسف حمار")){
        this.actionProvider.aa()
      }
      else{
        this.actionProvider.erorhandler()
      }
    }
  }
  
  export default MessageParser;