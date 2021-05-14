import React from 'react'
// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import { createClientMessage } from "react-chatbot-kit";
import BotAvatar from './BotAvatar'
import Todos from './Todos/Todos'
import GeneralOptions from './ManyListOfOption/GeneralOptions'
import ImgBot from './ImgBot'
const config = {
  initialMessages: [  createChatBotMessage(
    "Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
    {
      withAvatar: true,
      
      delay: 500,
      widget: "imgBOT",
    })
],

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
    {
      widgetName: "imgBOT",
      widgetFunc: (props) => <ImgBot {...props} />,
    },
  ]
}

export default config