class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    } 
    helloWorldhandler=()=>{
      const message = this.createChatBotMessage("hello again");
      this.setChatBotMessage(message);

    }

    listhandler=()=>{
      const message = this.createChatBotMessage("sure i will show u this now",{
        widget:'todos'
      });
      this.setChatBotMessage(message);

    }

    erorhandler=()=>{
      const message = this.createChatBotMessage("שלום לך אני לא מבין מה הכנסת נא בבקשה לבחור אחת מהאופציות שלנות",{
        widget:'opthion'

      
      });
      this.setChatBotMessage(message);
    }
    
    setChatBotMessage=(messege)=>{
      this.setState( state => ({...state, messages:[...state.messages , messege]}))
    }
  }
  
  export default ActionProvider;
  