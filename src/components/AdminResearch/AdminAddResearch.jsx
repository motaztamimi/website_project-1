/** @format */

import { useState } from 'react';
import './AdminAddResearch.css';
import { dataBase, timestamp, storage } from '../../config/firebase';
import { useHistory } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

const AdminAddResearch = () => {
  const [file, setFile] = useState(null);
  const [showDiv, setShowDiv] = useState(false);
  const history = useHistory();
  const div = (
    <div className='loading'>
      <div className='loader'></div>
    </div>
  );
  const [ResearchName, SetResearchName] = useState('');

  const collectionRef = dataBase.collection('Researches');
  const onFileChange = (e) => {
    let selected = e.target.files[0];

    // && types.includes(selected.type)
    if (selected) {
      setFile(selected);
    } else {
      setFile(null);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const storageRef = storage.ref(`Researches/${file.name}`);
    let url;
    setShowDiv(true);
    storageRef.put(file).then(() => {
      storageRef.getDownloadURL().then((data) => {
        url = data;
        collectionRef
          .add({
            fileUrl: url,
            name: ResearchName,
            createdAt: timestamp(),
          })
          .then(() => {
            history.push('/Admin/AdminResearch');
          });
      });
    });
  };

  return (
    <div className='AddNewsPage'>
      {showDiv && div}
      <form className='AddNewsForm' onSubmit={onSubmit}>
        <a href='/Admin'>
          <AiOutlineUser
            title='AdminPage'
            className='EditSlideShowPage2'
            id='accessIMG'
            color='#151e4d'
          />
        </a>
        <label>המחקר כ pdf</label>
        <input type='file' onChange={onFileChange} required />

        <label>כתורת המחקר</label>
        <input
          type='text'
          placeholder='נא להכניס כתורת המחקר'
          onChange={(e) => {
            SetResearchName(e.target.value);
          }}
          required
        />

        <input className='SubmitButton' type='submit' value='submit' />
      </form>
    </div>
  );
};

export default AdminAddResearch;
