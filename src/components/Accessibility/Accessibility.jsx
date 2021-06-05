/** @format */

import React, { useState } from 'react';
import './Accessibility.css';
import accessIMG from './accessibility.png';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function Accessibility() {
  const [font, setfont] = useState(100);
  var max = 130;
  var min = 70;
  var original = 100;
  const invertColor = () => {
    // the css we are going to inject
    var css =
        'html {-webkit-filter: invert(100%);' +
        '-moz-filter: invert(100%);' +
        '-o-filter: invert(100%);' +
        '-ms-filter: invert(100%); }',
      head = document.getElementsByTagName('head')[0],
      style = document.createElement('style');

    // a hack, so you can "invert back" clicking the bookmarklet again
    if (!window.counter) {
      window.counter = 1;
    } else {
      window.counter++;
      if (window.counter % 2 === 0) {
        css =
          'html {-webkit-filter: invert(0%); -moz-filter:    invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }';
      }
    }

    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    //injecting the css to the head
    head.appendChild(style);
  };
  const increaseFont = () => {
    if (font < max) {
      setfont(font + 10);
    }
  };
  const decreaseFont = () => {
    if (font > min) {
      setfont(font - 10);
    }
    console.log(font);
  };
  const originalFont = () => {
    setfont(original);
  };
  document.body.style.zoom = font + '%';
  const func = () => {
    document.getElementById('myDropdown').classList.toggle('show');
  };

  return (
    <div className='dropDown'>
      <img
        className='circleDive'
        title='Accessibility'
        id='accessIMG'
        onClick={func}
        src={accessIMG}
        alt='nothing'
      />
      <Link to='/'>
        <AiFillHome
          title='HomePage'
          className='circleDive2'
          id='accessIMG'
          color='#151e4d'
        />
      </Link>
      <Link to='/Admin'>
        <AiOutlineUser
          title='AdminPage'
          className='circleDive3'
          id='accessIMG'
          color='#151e4d'
        />
      </Link>

      <div id='myDropdown' className='triangle dropdown-content'>
        <div className='up'>
          <button className='circle' onClick={decreaseFont}>
            <span> א -</span>
          </button>
          <button className='circle' onClick={originalFont}>
            <span> א</span>
          </button>
          <button className='circle' onClick={increaseFont}>
            <span> א + </span>
          </button>
        </div>
        <div className='down circle'>
          <button onClick={invertColor}>
            <span>עוורי צבעים</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Accessibility;
