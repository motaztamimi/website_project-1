/** @format */

import useDataBase from '../../hooks/useDataBase';
import { dataBase } from '../../config/firebase';
import React from 'react';
import { useEffect, useState } from 'react';
import ListAdmin from '../ListAdmin';

const AdminShowQuestions = () => {
  const DataToShow = dataBase.collection('ChatBot');
  const [data, setdata] = useState('');
  const [nameDoc, setnameDoc] = useState('');
  const [data1, setdata1] = useState('');
  const [data2, setdata2] = useState('');
  const [bolean, setbollean] = useState(false);
  const [ResultToUPload, setResultToUPload] = useState('');
  const num = [
    { hebrew: 'רשומות רפואיות', english: 'ListHealth' },
    { hebrew: 'עובדים סוציאליים', english: 'Workers' },
    { hebrew: 'מטבח', english: 'kitchen' },
  ];
  const deleteNew = (item, index) => {
    const colecstion = dataBase.collection('ChatBot');

    let q = ResultToUPload[0].options.filter(function(name) {
      return item.value !== name.value;
    });
    let x = ResultToUPload.filter(function(name) {
      return name.id !== item.trigger;
    });
    x[0].options = q;

    colecstion
      .doc(nameDoc)
      .update({ Steps: x })
      .then(() => {
        setbollean(true);
      });
  };
  const changeSelectOptionHandler = (event) => {
    let documentname = event.target.value;
    const en = num.filter((e) => e.hebrew === documentname);
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
  useEffect(() => {
    DataToShow.doc('kitchen')
      .get()
      .then((snapshot) => {
        let x = snapshot.data()['Steps'];
        setdata(x);
      });
    DataToShow.doc('ListHealth')
      .get()
      .then((snapshot) => {
        let x = snapshot.data()['Steps'];
        setdata1(x);
      });
    DataToShow.doc('Workers')
      .get()
      .then((snapshot) => {
        let x = snapshot.data()['Steps'];
        setdata2(x);
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
    if (nameDoc === 'Workers') {
      setResultToUPload(data2);
      setbollean(false);
    }
  }, [bolean]);

  return (
    <div className='BotDataShow'>
      <h1>הצגת השאלות</h1>
      <select
        id='classes'
        className='dropBot'
        required
        onChange={changeSelectOptionHandler}>
        <option key='0' value='רשומות רפואיות' defaultValue>
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

      {ResultToUPload ? (
        <table key='table' className='BotTable'>
          <thead>
            <tr>
              <th>#</th>
              <th>שאלה</th>
              <th>תשובה</th>
            </tr>
          </thead>
          <tbody>
            {ResultToUPload[0].options.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <input
                      type='button'
                      value='X'
                      onClick={() => {
                        deleteNew(item, index);
                      }}
                    />
                  </td>
                  <td>{item.value}</td>

                  <td>{ResultToUPload[index + 1].message} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        ''
      )}
    </div>
  );
};

export default AdminShowQuestions;
