/** @format */

import useDataBase from '../../hooks/useDataBase';
import { dataBase } from '../../config/firebase';
import React from 'react';
import { useEffect, useState } from 'react';

const AdminShowQuestions = () => {
  const DataToShow = dataBase.collection('ChatBot');
  const DataToShow1 = useDataBase('ChatBot');
  const [data, setdata] = useState('');
  useEffect(() => {
    DataToShow.doc('kitchen')
      .get()
      .then((snapshot) => {
        let x = snapshot.data()['Steps'];
        setdata(x);
      });
  }, []);

  return (
    <div className='BotDataShow'>
      {data ? (
        <table key='table' className='BotTable'>
          <thead>
            <tr>
              <th>תשובה</th>
              <th>שאלה</th>
            </tr>
          </thead>
          <tbody>
            {data[0].options.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{data[index + 1].message} </td>
                  <td>{item.value}</td>
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
