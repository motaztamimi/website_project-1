/** @format */

import './AdminEditSlideShow.css';
import { useState } from 'react';
import { storage, dataBase, timestamp } from '../../config/firebase';
import AdminSlideShowPhotos from './AdminSlideShowPhotos';
import { AiOutlineUser } from 'react-icons/ai';
import ListAdmin from '../ListAdmin';

const AdminSlideShow = () => {
  const [file, setFile] = useState(null);
  const [selectedValue, setSelectedValue] = useState('kfarShaol');
  const types = ['image/png', 'image/jpeg', 'img/jpg'];
  const [collectionToSend, setCollectionToSend] = useState(
    'Departments/כפר שאול/slideShow'
  );
  const [showDiv, setShowDiv] = useState(false);
  const div = (
    <div className='loading'>
      <div className='loader'></div>
    </div>
  );
  const OnChangeFileHandeler = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
    }
  };

  const submithandeler = (e) => {
    e.preventDefault();
    if (file) {
      const storageRef = storage.ref(`${selectedValue}/slideShow/${file.name}`);
      let docs;
      let collectionRef;
      if (selectedValue === 'kfarShaol') {
        docs = 'כפר שאול';
        collectionRef = dataBase.collection(`Departments/${docs}/slideShow`);
      } else if (selectedValue === 'SherotKhelate') {
        docs = 'שירות קהילתי';
        collectionRef = dataBase.collection(`Departments/${docs}/slideShow`);
      } else if (selectedValue === 'HomePage') {
        collectionRef = dataBase.collection('HomePage/photos/slideShow');
      } else {
        docs = 'איתנים';
        collectionRef = dataBase.collection(`Departments/${docs}/slideShow`);
      }

      setShowDiv(true);
      storageRef.put(file).then((snapshot) => {
        storageRef.getDownloadURL().then((value) => {
          collectionRef
            .add({
              url: value,
              createdAt: timestamp(),
            })
            .then(() => {
              setShowDiv(false);
            });
        });
      });
    } else {
      alert('please upload an png, jpeg, jpg img');
      return;
    }
  };

  return (
    <div className='listAdminPSS'>
      <div className='listPSS'>
        <ListAdmin />
      </div>
      <div className='EditSlideShowPage'>
        {showDiv && div}
        <form className='EditSlideShowForm' onSubmit={submithandeler}>
          <span>העלאת תמונה מתחלפת</span>
          <a href='/Admin'>
            <AiOutlineUser
              title='AdminPage'
              className='EditSlideShowPage2'
              id='accessIMG'
              color='#151e4d'
            />
          </a>
          <select
            name=''
            id='selectDep'
            onChange={(e) => {
              setSelectedValue(e.target.value);
              if (e.target.value === 'kfarShaol') {
                setCollectionToSend(`Departments/כפר שאול/slideShow`);
              } else if (e.target.value === 'Etanim') {
                setCollectionToSend('Departments/איתנים/slideShow');
              } else if (e.target.value === 'HomePage') {
                setCollectionToSend('HomePage/photos/slideShow');
              } else {
                setCollectionToSend('Departments/שירות קהילתי/slideShow');
              }
            }}>
            <option value='kfarShaol' defaultValue>
              {'כפר שאול'}{' '}
            </option>
            <option value='SherotKhelate'>{'שירות קהילתי'} </option>
            <option value='Etanim'>{'איתנים'} </option>
            <option value='HomePage'>{'דף הבית'} </option>
          </select>
          <input
            type='file'
            id='uploadFromSildeShow'
            onChange={OnChangeFileHandeler}
            required
          />

          <input
            type='submit'
            value='העלאה תמונה מתחלפת'
            className='submitPhoto'
          />
        </form>

        {collectionToSend && (
          <AdminSlideShowPhotos collection={collectionToSend} />
        )}
      </div>
    </div>
  );
};

export default AdminSlideShow;
