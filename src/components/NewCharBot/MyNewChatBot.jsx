/** @format */
import React, { useEffect, useState } from 'react';
import { dataBase } from '../../config/firebase';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import './ChatBott.css';
import ImgBot from '../../components/ChatBot/ImgBot';

const MyNewChatBot = () => {
  const [bollean, setbollean] = useState(false);
  const [bollean1, setbollean1] = useState(false);
  const [data, setdata] = useState(null);
  const [data1, setdata1] = useState(null);
  const [data2, setdata2] = useState(null);
  const [resultToShow, setResultToShow] = useState(null);
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
    headerTitle: 'מענה אוטומטי מהמרכז',
  };
  const [newFiree] = useState([
    {
      id: 'imageStarting',
      component: <ImgBot />,
      trigger: 'WellcomeMessage',
    },
    {
      id: 'WellcomeMessage',

      message:
        'בורכים הבאים למרכזה הירושלמי לבריאות המפש נא בבקשה לבחור אחת מהאופציות שלנו',
      trigger: 'MainOpthion',
    },
    {
      id: 'MainOpthion',
      options: [
        {
          value: 'מטבח',
          label: 'מטבח',
          trigger: 'מטבח',
        },
        {
          value: 'רשומות רפואיות',
          label: 'רשומות רפואיות',
          trigger: 'רשומות רפואיות',
        },
        {
          value: 'עובדים סוציאליים',
          label: 'עובדים סוציאליים',
          trigger: 'עובדים סוציאליים',
        },
      ],
    },
    {
      id: 'מטבח',
      message: 'הבנתי אנא בבקשה לבחור אחת מהשאלות הבאות',
      trigger: 'אופציות למטבח',
    },
    {
      id: 'אופציות למטבח',
      message: 'הבנתי אנא בבקשה לבחור אחת מהשאלות הבאות',
      end: true,
    },
    {
      id: 'רשומות רפואיות',
      message: 'הבנתי אנא בבקשה לבחור אחת מהשאלות הבאות',
      trigger: 'אופציות רשומות',
    },
    {
      id: 'אופציות רשומות',
      message: 'הבנתי אנא בבקשה לבחור אחת מהשאלות הבאות',
      end: true,
    },
    {
      id: 'עובדים סוציאליים',
      message: 'הבנתי אנא בבקשה לבחור אחת מהשאלות הבאות',
      trigger: 'אופציות עובדים',
    },
    {
      id: 'אופציות עובדים',
      message: 'הבנתי אנא בבקשה לבחור אחת מהשאלות הבאות',
      end: true,
    },
    {
      id: 'end Question',
      message: 'האם את/ה צריך עוד משהו',
      trigger: 'end Question opthion',
    },
    {
      id: 'end Question opthion',
      options: [
        { value: 'כן', label: 'כן', trigger: 'כן' },

        { value: 'לא', label: 'לא', trigger: 'לא' },
      ],
    },
    {
      id: 'כן',
      message: 'בכיף',
      trigger: 'MainOpthion',
    },
    {
      id: 'לא',
      message: 'אני מקווה שעזרתי לך להתראות',
      end: true,
    },
  ]);

  useEffect(() => {
    dataBase
      .collection('ChatBot')
      .doc('kitchen')
      .get()
      .then((snapshot) => {
        let x = snapshot.data()['Steps'];
        setdata(x);
      });
    dataBase
      .collection('ChatBot')
      .doc('ListHealth')
      .get()
      .then((snapshot) => {
        let x = snapshot.data()['Steps'];
        setdata1(x);
      });
    dataBase
      .collection('ChatBot')
      .doc('Workers')
      .get()
      .then((snapshot) => {
        let x = snapshot.data()['Steps'];
        setdata2(x);
        setbollean(true);
      });
  }, []);
  useEffect(() => {
    let temp = [];
    if (data1 && data2 && data && newFiree) {
      if (bollean) {
        for (let val in newFiree) {
          temp.push(newFiree[val]);
        }
        for (let vla in data) {
          temp.push(data[vla]);
        }
        for (let vla in data1) {
          temp.push(data1[vla]);
        }
        for (let vla in data2) {
          temp.push(data2[vla]);
        }
        setResultToShow(temp);
        setbollean1(true);
      }
    }
  }, [bollean, data1, data2, data, newFiree]);

  return (
    <ThemeProvider theme={theme}>
      <div>{bollean1 ? <ChatBot steps={resultToShow} {...config} /> : ''}</div>
    </ThemeProvider>
  );
};

export default MyNewChatBot;
