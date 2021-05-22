import './AdminEditSlideShow.css';
import { useState } from 'react';
import { storage, dataBase, timestamp } from '../../config/firebase';
const AdminSlideShow = () => {
  const [file, setFile] = useState(null);
  const [selectedValue, setSelectedValue] = useState('kfarShaol');
  const types = ['image/png', 'image/jpeg', 'img/jpg'];
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
      if (selectedValue == 'kfarShaol') {
        docs = 'כפר שאול';
      } else if (selectedValue == 'SherotKhelate') {
        docs = 'שירות קהילתי';
      } else {
        docs = 'איתנים';
      }
      const collectionRef = dataBase.collection(
        `Departments/${docs}/slideShow`
      );
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
    <div className='EditSlideShowPage'>
      {showDiv && div}
      <form className='EditSlideShowForm' onSubmit={submithandeler}>
        <span>עלית תמונה מתחלפת</span>
        <select
          name=''
          id='selectDep'
          onChange={(e) => {
            setSelectedValue(e.target.value);
          }}>
          <option value='kfarShaol' defaultValue>
            {'כפר שאול'}{' '}
          </option>
          <option value='SherotKhelate'>{'שירות קהילתי'} </option>
          <option value='Etanim'>{'איתנים'} </option>
        </select>
        <input
          type='file'
          id='uploadFromSildeShow'
          onChange={OnChangeFileHandeler}
          required
        />

        <input type='submit' value='upload' className='submitPhoto' />
      </form>
    </div>
  );
};

export default AdminSlideShow;
