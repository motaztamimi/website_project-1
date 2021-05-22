/** @format */

import { useState } from 'react';
import './AdminAddResearch.css';
import { dataBase, timestamp, storage } from '../../config/firebase';
import { useHistory } from 'react-router-dom';
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

  const [error, setError] = useState(null);
  const types = ['file/pdf'];
  const collectionRef = dataBase.collection('Researches');
  const onFileChange = (e) => {
    let selected = e.target.files[0];

    // && types.includes(selected.type)
    if (selected) {
      setFile(selected);

      setError('');
    } else {
      setFile(null);
      setError('Please Select a pdf file');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const storageRef = storage.ref(`Researches/${file.name}`);
    let url;
    setShowDiv(true);
    storageRef.put(file).then((snapshot) => {
      storageRef.getDownloadURL().then((data) => {
        url = data;
        collectionRef
          .add({
            fileUrl: url,
            name: ResearchName,
            createdAt: timestamp(),
          })
          .then((value) => {
            history.push('/Admin/AdminResearch');
          });
      });
    });
  };

  return (
    <div className='AddNewsPage'>
      {showDiv && div}
      <form className='AddNewsForm' onSubmit={onSubmit}>
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
