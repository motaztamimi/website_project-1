/** @format */

import { useState } from 'react';
import './AdminAddNews.css';
import { dataBase, timestamp, storage } from '../../config/firebase';
import { useHistory } from 'react-router-dom';
const AdminAddNews = () => {
  const [file, setFile] = useState(null);
  const [showDiv, setShowDiv] = useState(false);
  const history = useHistory();
  const div = (
    <div className='loading'>
      <div className='loader'></div>
    </div>
  );
  const [NewsTitle, SetNewsTitle] = useState('');
  const [NewsSubTitle, setNewsSubTitle] = useState('');
  const [NewsBody, setNewsBody] = useState('');
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg', 'img/jpg'];
  const collectionRef = dataBase.collection('News');
  const onFileChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please Select an image file (png , jpeg or jpg)');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const storageRef = storage.ref(`News/${file.name}`);
    let url;
    setShowDiv(true);
    storageRef.put(file).then((snapshot) => {
      storageRef.getDownloadURL().then((data) => {
        url = data;

        collectionRef
          .add({
            NewsImage: url,
            NewsTitle: NewsTitle,
            NewsSubTitle: NewsSubTitle,
            NewsBody: NewsBody,
            createdAt: timestamp(),
          })
          .then((value) => {
            window.location.reload();
            // history.push('/Admin/EditNews');
          });
      });
    });
  };

  return (
    <div className='AddNewsPage0'>
      {showDiv && div}
      <form className='AddNewsForm0' onSubmit={onSubmit}>
        <label>תמונת החדשות</label>
        <input type='file' onChange={onFileChange} required />
        <label>כתורת החדשות</label>
        <input
          type='text'
          placeholder='נא להכניס כתורת החדשות'
          onChange={(e) => {
            SetNewsTitle(e.target.value);
          }}
          required
        />
        <label> כתורת משנית לחדשות</label>
        <input
          type='text'
          placeholder='נא להכניס כתורת'
          onChange={(e) => {
            setNewsSubTitle(e.target.value);
          }}
          required
        />
        <label> גוף החדשות</label>
        <textarea
          cols='30'
          rows='10'
          onChange={(e) => {
            setNewsBody(e.target.value);
          }}
          required></textarea>
        <input className='SubmitButton' type='submit' value='submit' />
      </form>
    </div>
  );
};

export default AdminAddNews;
