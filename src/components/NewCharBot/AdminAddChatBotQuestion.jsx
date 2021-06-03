/** @format */
import { useState, useEffect } from 'react';
import React from 'react';
import './../AdminAddDoctors/AddDoctors.css';
import '../adminAddNews/AdminAddNews.css';
import useDataBase from '../../hooks/useDataBase';
import { dataBase, timestamp } from '../../config/firebase';
const AdminAddChatBotQuestion = () => {
  const [ResultToUPload, setResultToUPload] = useState('');
  const [bollean, setbollean] = useState(false);
  const [Doc, setDoc] = useState('');
  const [data, setdata] = useState('');
  const [data1, setdata1] = useState('');
  const [nameDoc, setnameDoc] = useState('');
  const [BotQuestion, setBotQuestion] = useState('');
  const [BotAnswer, setBotAnswer] = useState('');
  const Bot = useDataBase('ChatBot');
  const collectionRef = dataBase.collection('ChatBot');
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
  }, []);
  useEffect(() => {
    if (nameDoc === 'kitchen') {
      setResultToUPload(data);
      setbollean(false);
    }
    if (nameDoc === 'ListHealth') {
      setResultToUPload(data1);
      setbollean(false);
    }
  }, [bollean]);
  const onSubmit = (e) => {
    e.preventDefault();
    const en = num.filter((e) => e.hebrew === Doc);

    let name = en[0].english;
    setnameDoc(name);
    if (name === 'kitchen') {
      setbollean(true);
    }
    if (name === 'ListHealth') {
      setbollean(true);
    }

    let OPthions = {
      value: BotQuestion,
      label: BotQuestion,
      trigger: BotQuestion,
    };
    if (ResultToUPload) {
      console.log(ResultToUPload);
      ResultToUPload[0].options.push(OPthions);
      let Question = {
        id: BotQuestion,
        message: BotAnswer,
        trigger: 'end Question',
      };
      ResultToUPload.push(Question);
      collectionRef.doc(nameDoc).update({ Steps: ResultToUPload });
    }
  };
  const changeSelectOptionHandler = (event) => {
    console.log(event.target.value);
    setDoc(event.target.value);
  };
  return (
    <div className='AddNewsPage'>
      <select
        required
        id='classes'
        className='dropBot'
        onChange={changeSelectOptionHandler}>
        <option key='0' value='' defaultValue>
          בחר נושא
        </option>
        <option key='4' value='רשומות רפואיות' defaultValue>
          רשומות רפואיות
        </option>
        <option key='1' value='עובדים סוציאליים' defaultValue>
          עובדים סוציאליים
        </option>
        <option key='2' value='מטבח'>
          מטבח
        </option>
      </select>
      <form className='AddNewsForm' onSubmit={onSubmit}>
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
  );
};

export default AdminAddChatBotQuestion;
