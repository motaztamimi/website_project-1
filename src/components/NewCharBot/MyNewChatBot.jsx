/** @format */
import React, { useEffect, useState } from 'react';
import { dataBase } from '../../config/firebase';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import './ChatBott.css';
import ImgBot from '../../components/ChatBot/ImgBot';
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
  const theme = {
    background: 'white',
    fontFamily: 'Rubik',
    headerBgColor: '#1AAFB3',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#E8E8EB',
    botFontColor: 'black',
    userBubbleColor: 'rgb(72, 145, 252)',
    userFontColor: 'white',
  };
  const config = {
    width: '400px',
    height: '500px',
    hideUserAvatar: true,
    floating: true,
    placeholder: 'Type your response.',
    headerTitle: 'Interested in Pet Insurance?',
  };

  const steps = [
    {
      id: '1',
      component: <ImgBot />,
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
        { value: 4, label: ' מטבח', trigger: 'מטבח' },
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
    {
      id: 'מטבח',
      message: 'נא בבקשה לבחור אחת מהשאלות שלנו',
      trigger: 'שאלות מטבח',
    },
    {
      id: 'שאלות מטבח',
      options: [
        {
          value: 1,
          label: 'איפה אוכלים בבית החולים ?',
          trigger: 'איפה אוכלים בבית החולים ?',
        },
        // { value: 2, label: 'מה כולל התפריט?', trigger: 'מה כולל התפריט?' },
        // {
        //   value: 3,
        //   label: 'תפריטים מיוחדים?',
        //   trigger: 'תפריטים מיוחדים?',
        // },
        // {
        //   value: 4,
        //   label: 'ומה בנוגע לכשרות?',
        //   trigger: 'ומה בנוגע לכשרות?',
        // },
      ],
    },
    {
      id: 'איפה אוכלים בבית החולים ?',
      message: 'מטופלים - במחלקות השונות.',
      trigger: 'more',
    },
    {
      id: 'more',
      avatar: 'true',
      message: 'עובדי המרכז – בחדרי האוכל בכל קמפוס',
      end: true,
    },
  ];
  // return
  return (
    <ThemeProvider theme={theme}>
      <div>{item ? <ChatBot steps={steps} {...config} /> : 'hello'}</div>
    </ThemeProvider>
  );
};

export default MyNewChatBot;
