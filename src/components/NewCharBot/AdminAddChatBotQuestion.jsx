/** @format */
import { useState, useEffect } from 'react';
import React from 'react';
import './../AdminAddDoctors/AddDoctors.css';
import '../adminAddNews/AdminAddNews.css';
import AdminShowQuestions from './AdminShowQuestions';
import './ChatBott.css';
import { dataBase } from '../../config/firebase';
import ListAdmin from "../ListAdmin"
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

  const collectionRef = dataBase.collection('ChatBot');
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
    collectionRef
      .doc('kitchen')
      .get()
      .then((snapshot) => {
        let x = snapshot.data()['Steps'];
        setdata(x);
      });
    collectionRef
      .doc('ListHealth')
      .get()
      .then((snapshot) => {
        let x = snapshot.data()['Steps'];
        setdata1(x);
      });
    collectionRef
      .doc('Workers')
      .get()
      .then((snapshot) => {
        let x = snapshot.data()['Steps'];
        setdata2(x);
      });
  }, [true]);
  useEffect(() => {
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
  }, [bollean]);
  const onSubmit = (e) => {
    e.preventDefault();
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

    console.log(ResultToUPload);
    collectionRef
      .doc(nameDoc)
      .update({ Steps: ResultToUPload })
      .then(() => {
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
              type='text'
              placeholder='נא להכניס שאלה להוספה'
              onChange={(e) => {
                setBotQuestion(e.target.value);
              }}
              required
            />
            <label>תשובה</label>
            <input
              type='text'
              placeholder='נא להכניס תשובה'
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
