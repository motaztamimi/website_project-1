/** @format */

import React, { useState } from 'react';
import './BottonHomePage.css';
import '../botAvatar.css';
const BottonHomePage = () => {
  const [showed, setshowed] = useState(false);
  function ShowBot() {
    let Bot = document.getElementsByClassName(
      'react-chatbot-kit-chat-container'
    );
    let a = Array.from(Bot);
    if (showed) {
      a[0].style.display = 'none';
    } else {
      a[0].style.display = 'block';
    }
    setshowed(!showed);
  }
  return (
    <div>
      <button className='BotPageButton' onClick={ShowBot}>
        <i className='material-icons'>assistant</i>
      </button>
    </div>
  );
};

export default BottonHomePage;
