/** @format */
import React, { useEffect, useState } from 'react';
import { dataBase } from '../../config/firebase';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import './ChatBott.css';
import ImgBot from '../../components/ChatBot/ImgBot';
import Message from './Message';

const MyNewChatBot = () => {
  const Departments = dataBase.collection('Departments');
  const [item, setitem] = useState(null);
  let temp = [];
  const [bollean, setbollean] = useState(false);
  const [bollean1, setbollean1] = useState(false);
  const arraya = [];
  const [data, setdata] = useState(null);
  const collectionRef = dataBase.collection('ChatBot');

  useEffect(() => {
    collectionRef
      .doc('kitchen')
      .get()
      .then((snapshot) => {
        let x = snapshot.data()['Steps'];
        setdata(x);
        setbollean(true);
      });
  }, [true]);
  useEffect(() => {
    if (bollean) {
      temp = [...newFiree];
      for (let vla in data) {
        temp.push(data[vla]);
      }
      setdata(temp);
      setbollean1(true);
      console.log(temp);
    }
  }, [bollean]);
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
    headerTitle: 'מענה אוטומטי מהמרכז',
  };
  const newFiree = [
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
  ];

  const newStep = [
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
          value: 'רשומות רפואיות',
          label: 'רשומות רפואיות',
          trigger: 'רשומות רפואיות',
        },
        {
          value: 'עובדים סוציאליים',
          label: 'עובדים סוציאליים',
          trigger: 'עובדים סוציאליים',
        },
        {
          value: 'מטבח',
          label: 'מטבח',
          trigger: 'מטבח',
        },
      ],
    },
    {
      id: 'רשומות רפואיות',
      message: 'הבנתי אנא בבקשה לבחור אחת מהשאלות הבאות',
      trigger: ' אופציות לרשומות רפואיות',
    },
    {
      id: 'עובדים סוציאליים',
      message: 'הבנתי אנא בבקשה לבחור אחת מהשאלות הבאות',
      end: true,
    },
    //החלק של המטבח
    {
      id: 'מטבח',
      message: 'הבנתי אנא בבקשה לבחור אחת מהשאלות הבאות',
      trigger: 'אופציות למטבח',
    },
    {
      id: 'אופציות למטבח',
      options: [
        {
          value: 'איפה אוכלים בבית החולים ',
          label: 'איפה אוכלים בבית החולים ',
          trigger: 'איפה אוכלים בבית החולים ',
        },
        {
          value: 'מה כולל התפריט',
          label: 'מה כולל התפריט',
          trigger: 'מה כולל התפריט',
        },
        {
          value: 'תפריטים מיוחדים',
          label: 'תפריטים מיוחדים',
          trigger: 'תפריטים מיוחדים',
        },
        {
          value: 'ומה בנוגע לכשרות',
          label: 'ומה בנוגע לכשרות',
          trigger: 'ומה בנוגע לכשרות',
        },
      ],
    },
    //האפציות של מטבח
    {
      id: 'איפה אוכלים בבית החולים ',
      asMessage: true,
      component: (
        <Message
          Mesg='מטופלים - במחלקות השונות.
      עובדי המרכז – בחדרי האוכל בכל קמפוס
      '
        />
      ),
      trigger: 'end Question',
    },
    {
      id: 'מה כולל התפריט',
      asMessage: true,
      component: (
        <Message Mesg='התפריט נבנה בהתאם להנחיות סל המזון וע"פ עקרונות התזונה הנכונה' />
      ),
      trigger: 'המשך לתפריט',
    },
    {
      id: 'המשך לתפריט',
      asMessage: true,
      component: (
        <Message Mesg='בכל ארוחה תמצאו חלבונים/ פחמימות / שומנים / ויטמינים ומינרליים' />
      ),
      trigger: 'end Question',
    },
    {
      id: 'תפריטים מיוחדים',
      component: (
        <Message Mesg='תפריטים מיוחדים כגון תפריט טבעוני, ללא גלוטן, צמחוני או תפריטים למצבי מחלה שונים מוגשים בהתאם לצרכי המטופלים ולפי המלצות הדיאטניות.' />
      ),
      asMessage: true,
      trigger: 'end Question',
    },
    {
      id: 'ומה בנוגע לכשרות',
      component: (
        <Message
          Mesg='הכנת המזון וחלוקתו במחלקות מתבצעת בפיקוח של משגיח כשרות במשרה מלאה.
      המזון הוא בכשרות הרבנות הראשית
      '
        />
      ),
      asMessage: true,
      trigger: 'end Question opthion',
    },
    //סיום השאלות של המטבח
    // סיום החלק של המטבח

    //ההתחלה של רשומות רפואיות
    {
      id: ' אופציות לרשומות רפואיות',
      message: 'הבנתי אנא בבקשה לבחור אחת מהשאלות הבאות',
      trigger: 'רשימת האופציות',
    },

    {
      id: 'רשימת האופציות',
      options: [
        {
          value: 'איך פונים לקבל מידע',
          label: 'איך פונים לקבל מידע',
          trigger: 'איך פונים לקבל מידע',
        },
        {
          value: 'כיצד עו"ד יכול לבקש מידע ממחלקת רשומות רפואיות',
          label: 'כיצד עו"ד יכול לבקש מידע ממחלקת רשומות רפואיות',
          trigger: 'כיצד עו"ד יכול לבקש מידע ממחלקת רשומות רפואיות',
        },
      ],
    },
    {
      id: 'איך פונים לקבל מידע',
      component: (
        <Message
          Mesg='שולחים בקשה בפקס 02-6551410 בה מציינים בבירור איזה מידע מתבקש ומצרפים צילום תעודת זהות או בדואר לידי מחלקת רשומות רפואיות בית חולים כפר שאול - רחוב הרב רפאל קצנלבוגן 101, ירושלים
      לידיעתך, נוהלי משרד הבריאות קובעים כי קבלת העתק של רשומה רפואית מחויב בתשלום.
      '
        />
      ),
      asMessage: true,
      trigger: 'end Question',
    },

    {
      id: 'כיצד עו"ד יכול לבקש מידע ממחלקת רשומות רפואיות',
      component: (
        <Message
          Mesg='כל בקשת מידע תועבר למחלקת הרשומה אשר תטפל / תנתב הבקשה.
      מספר הפקס של מחלקת הרשומה 02-6551410 או בדואר לכתובת 
      '
        />
      ),
      asMessage: true,
      trigger: 'end Question',
    },

    //end Question
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
    //end the end Question
  ];

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
  console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <div>{bollean1 ? <ChatBot steps={data} {...config} /> : 'hello'}</div>
    </ThemeProvider>
  );
};

export default MyNewChatBot;
