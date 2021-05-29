/** @format */

import React, { useEffect, useState } from 'react';
import useDataBase from '../../hooks/useDataBase';
import { dataBase } from '../../config/firebase';

import ChatBot from 'react-simple-chatbot';
import immg from './LOGONEW.jpg';
import './ChatBott.css';

const MyNewChatBot = () => {
  const Departments = dataBase.collection('Departments');
  const [item, setitem] = useState(null);
  const [item1, setitem1] = useState(null);
  const arraya = [];

  useEffect(() => {
    Departments.doc('כפר שאול')
      .get()
      .then((value) => {
        setitem(value.data());
      });
  }, [true]);

  useEffect(() => {
    setitem1(item);
  }, [item]);

  function removeTags(str) {
    if (str === null || str === '') return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    const stringa = str.replace(/&nbsp;/gi, '');

    return stringa.replace(/(<([^>]+)>)/gi, '');
  }

  const config = {
    width: '400px',
    height: '500px',
    floating: true,
    botDelay: 1500,
    avatarStyle: {
      borderRadius: '50%',
    },
    contentStyle: {
      backgroundColor: '#fff',
    },
    bubbleStyle: {
      backgroundColor: '#e8e8eb',
      color: 'black',
    },
    floatingStyle: {
      backgroundColor: ' rgb(72, 145, 252)',
    },
    style: {
      backgroundColor: '#e8e8eb',
    },
  };
  const steps = [
    {
      id: '1',
      component: (
        <div className='imgsize'>
          <img className='imgsize' src={immg} alt='' />{' '}
        </div>
      ),

      trigger: '2',
    },
    {
      id: '2',

      message:
        'בורכים הבאים למרכזה הירושלמי לבריאות המפש נא בבקשה לבחור אחת מהאופציות שלנו',
      trigger: '3',
    },
    {
      id: '3',

      options: [
        {
          value: 'כפר שאול',
          label: ' כפר שאול',
          trigger: (previousValue) => {
            arraya.push(previousValue.value);
            console.log(previousValue.value);
            return previousValue.value;
          },
        },
        { value: 2, label: 'איתנים ', trigger: 'איתנים' },
        { value: 3, label: 'השירות הקהילתי', trigger: 'השירות הקהילתי' },
      ],
    },
    {
      id: 'כפר שאול',
      options: [
        {
          value: 'מיון והשהייה',
          label: 'מיון והשהייה',
          trigger: (previousValue) => {
            arraya.push(previousValue.value);
            return previousValue.value;
          },
        },
        {
          value: 'מחלקה פעילה (סגורה) א׳',
          label: 'מחלקה פעילה (סגורה) א׳',
          trigger: (previousValue) => {
            arraya.push(previousValue.value);
            return previousValue.value;
          },
        },
        {
          value: 'מחלקה פעילה ממושכת ג׳(פסיכוגריאטריה)',
          label: 'מחלקה פעילה ממושכת ג׳(פסיכוגריאטריה)',
          trigger: (previousValue) => {
            arraya.push(previousValue.value);
            return previousValue.value;
          },
        },
      ],
    },
    {
      id: 'מיון והשהייה',

      delay: 1000,
      message: () => {
        const a = removeTags(item[arraya[1]]['fourth']);
        arraya.pop();
        arraya.pop();
        return a;
      },
      trigger: 'finish',
    },
    {
      id: 'מחלקה פעילה (סגורה) א׳',

      delay: 1000,
      message: () => {
        const a = removeTags(item[arraya[1]]['fourth']);
        arraya.pop();
        arraya.pop();
        return a;
      },
      trigger: 'finish',
    },
    {
      id: 'מחלקה פעילה ממושכת ג׳(פסיכוגריאטריה)',

      delay: 1000,
      message: () => {
        const a = removeTags(item[arraya[1]]['fourth']);
        arraya.pop();
        arraya.pop();
        return a;
      },
      trigger: 'finish',
    },
    {
      id: 'איתנים',
      message: 'אני  עוד בבניה של המחלקות',
      end: true,
    },
    {
      id: 'השירות הקהילתי',

      message: 'אני  עוד בבניה של המחלקות',
      end: true,
    },
    {
      id: 'finish',
      message: 'האם  צריך עוד משהו',
      trigger: 'ask',
    },
    {
      id: 'ask',
      options: [
        {
          value: 'כן',
          label: 'כן',
          trigger: () => {
            return '2';
          },
        },
        {
          value: 'לא',
          label: 'לא',
          trigger: 'bye',
        },
      ],
    },
    {
      id: 'bye',
      message: 'להתראות',
      end: true,
    },
  ];
  return <div>{item ? <ChatBot steps={steps} {...config} /> : 'hello'}</div>;
};

export default MyNewChatBot;
