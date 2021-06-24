/** @format */
import { useState, useEffect } from 'react';
import React from 'react';
import './../AdminAddDoctors/AddDoctors.css';
import '../adminAddNews/AdminAddNews.css';
import AdminShowQuestions from './AdminShowQuestions';
import './ChatBott.css';
import { dataBase } from '../../config/firebase';
import ListAdmin from '../ListAdmin';
import { AiOutlineUser } from 'react-icons/ai';
const AdminAddChatBotQuestion = () => {
  const [ResultToUPload, setResultToUPload] = useState('');
  const [bollean, setbollean] = useState(false);
  const [data, setdata] = useState('');
  const [data1, setdata1] = useState('');
  const [data2, setdata2] = useState('');
  const [nameDoc, setnameDoc] = useState('');
  const [BotQuestion, setBotQuestion] = useState('');
  const [BotAnswer, setBotAnswer] = useState('');
  const [showDiv, setShowDiv] = useState(false);

  const div = (
    <div className='Botloading'>
      <div className='Botloader'></div>
    </div>
  );
  const num = [
    { hebrew: 'רשומות רפואיות', english: 'ListHealth' },
    { hebrew: 'עובדים סוציאליים', english: 'Workers' },
    { hebrew: 'מטבח', english: 'kitchen' },
  ];
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
      });
  }, []);
  useEffect(() => {
    if (bollean === false) {
      return;
    }
    if (nameDoc !== '' && (data1 !== '' || data2 !== '' || data !== '')) {
      if (nameDoc === 'kitchen') {
        setResultToUPload(data);
        setbollean(false);
      }
      if (nameDoc === 'ListHealth') {
        setResultToUPload(data1);
        setbollean(false);
      }
      if (nameDoc === 'Workers') {
        setResultToUPload(data2);
        setbollean(false);
      }
    }
  }, [nameDoc, bollean, data1, data2, data]);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(BotAnswer);
    let OPthions = {
      value: BotQuestion,
      label: BotQuestion,
      trigger: BotQuestion,
    };
    setShowDiv(true);
    ResultToUPload[0].options.push(OPthions);
    let Question = {
      id: BotQuestion,
      message: BotAnswer,
      trigger: 'end Question',
    };
    ResultToUPload.push(Question);
    dataBase
      .collection('ChatBot')
      .doc(nameDoc)
      .update({ Steps: ResultToUPload })
      .then(() => {
        document.getElementById('BotQuestion').value = ' ';
        document.getElementById('BotAnswer').value = ' ';
        setShowDiv(false);
        window.location.reload();
      });
  };
  const changeSelectOptionHandler = (event) => {
    let namea = event.target.value;
    const en = num.filter((e) => e.hebrew === namea);
    let name = en[0].english;
    setnameDoc(name);
    if (name === 'kitchen') {
      setbollean(true);
    }
    if (name === 'ListHealth') {
      setbollean(true);
    }
    if (name === 'Workers') {
      setbollean(true);
    }
  };
  return (
    <div className='listAdminn'>
      <div className='ll'>
        <a href='/Admin'>
          <AiOutlineUser
            title='AdminPage'
            className='EditSlideShowPage2'
            id='accessIMG'
            color='#151e4d'
          />
        </a>
        <ListAdmin />
      </div>
      <div className='BotContainer'>
        <div className='BotformDiv'>
          {showDiv && div}
          <h1>הוספת שאלות</h1>
          <form className='AddNewsForm Botform' onSubmit={onSubmit}>
            <label> חלק </label>
            <select
              id='classes'
              className='dropBot'
              required
              onChange={changeSelectOptionHandler}>
              <option key='0' value='' defaultValue>
                בחר נושא
              </option>
              <option key='4' value='רשומות רפואיות'>
                רשומות רפואיות
              </option>
              <option key='1' value='עובדים סוציאליים'>
                עובדים סוציאליים
              </option>
              <option key='2' value='מטבח'>
                מטבח
              </option>
            </select>
            <label> שאלה </label>
            <input
              id='BotQuestion'
              type='text'
              placeholder='נא להכניס שאלה בעברית'
              onChange={(e) => {
                setBotQuestion(e.target.value);
              }}
              required
            />
            <label>תשובה</label>
            <input
              id='BotAnswer'
              type='text'
              placeholder='נא להכניס תשובה בעברית'
              onChange={(e) => {
                setBotAnswer(e.target.value);
              }}
              required
            />

            <input className='SubmitButton' type='submit' value='submit' />
          </form>
        </div>
        <div className='vLine1'>
          <div className='vLine'></div>
        </div>

        <AdminShowQuestions key='AdminShowQuestions' />
      </div>
    </div>
  );
};

export default AdminAddChatBotQuestion;
