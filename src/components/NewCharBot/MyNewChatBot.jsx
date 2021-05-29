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

  useEffect(() => {
    Departments.doc('איתנים')
      .get()
      .then((value) => {
        setitem(value.data()['מחלקה נשים']['fourth']);
      });
  }, [true]);

  useEffect(() => {
    console.log(item);
    setitem1(item);
  }, [item]);

  function removeTags(str) {
    if (str === null || str === '') return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    const stringa = str.replace(/&nbsp;/gi, '');
    console.log(stringa);
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
      delay: 0,
      options: [
        { value: 1, label: ' כפר שאול', trigger: 'כפר שאול' },
        { value: 2, label: 'איתנים ', trigger: 'איתנים' },
        { value: 3, label: 'השירות הקהילתי', trigger: 'השירות הקהילתי' },
      ],
    },
    {
      id: 'כפר שאול',
      options: [{ value: 1, label: 'מיון והשהיה', trigger: 'details' }],
    },
    {
      id: 'details',
      delay: 1000,
      message: () => {
        const a = removeTags(item);

        return a;
      },
      end: true,
    },
    {
      id: 'איתנים',
      message: 'ok',
      end: true,
    },
    {
      id: 'השירות הקהילתי',

      message: 'ok',
      end: true,
    },
  ];
  return <div>{item ? <ChatBot steps={steps} {...config} /> : 'hello'}</div>;
};

export default MyNewChatBot;
