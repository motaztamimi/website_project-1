import React from 'react'
// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from './BotAvatar'
import Todos from './Todos/Todos'
import Opthion from './Opthion/Opthion'
import GeneralOptions from './ManyListOfOption/GeneralOptions'
const config = {
  initialMessages: [createChatBotMessage(`שלום לכם`,{
    widget:'options'
  })],
  botName: "Motaz",
  customComponents:{
      botAvatar:(props)=> <BotAvatar {...props}/>
  },
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#E8E8EB",
    
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  state:{
      todos:[],
      opthion:[]
  },
  widgets:[
    {
      widgetName: "todos",
      widgetFunc: (props) => <Todos {...props} />,
      mapStateToProps: ["todos"],
    },
    {
      widgetName: "options",
      widgetFunc: (props) => <GeneralOptions {...props} />,
    },
  ]
}

export default config