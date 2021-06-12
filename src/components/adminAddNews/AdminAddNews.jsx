/** @format */

import { useState } from 'react';
import './AdminAddNews.css';
import { dataBase, timestamp, storage } from '../../config/firebase';
const AdminAddNews = () => {
  const [file, setFile] = useState(null);
  const [showDiv, setShowDiv] = useState(false);
  const div = (
    <div className='loading'>
      <div className='loader'></div>
    </div>
  );
  const [NewsTitle, SetNewsTitle] = useState('');
  const [NewsSubTitle, setNewsSubTitle] = useState('');
  const [NewsBody, setNewsBody] = useState('');
  const types = ['image/png', 'image/jpeg', 'img/jpg'];
  const collectionRef = dataBase.collection('News');
  const onFileChange = (e) => {
    let selected = e.target.files[0];
    /////////////////////added
    let newFile = selected;

    storage
      .ref('News/')
      .listAll()
      .then((res) => {
        res.items.forEach((itemRef) => {
          if (itemRef.name === selected.name) {
            console.log('iam in ');
            var val = Math.floor(1000 + Math.random() * 9000);
            newFile = new File([selected], val + selected.name, {
              type: selected.type,
              lastModified: selected.lastModified,
            });
            console.log('the new file is ' + newFile.name);
          }
          if (newFile && types.includes(newFile.type)) {
            console.log('we have update to ' + newFile.name);
            setFile(newFile);
          } else {
            setFile(null);
          }
        });
      })
      .catch(() => {
        // Uh-oh, an error occurred!
      });
    /////////////////////added
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(file.name);
    const storageRef = storage.ref(`News/${file.name}`);
    let url;
    setShowDiv(true);
    storageRef.put(file).then(() => {
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
          .then(() => {
            document.getElementById('FileName').value = null;
            document.getElementById('Title').value = ' ';
            document.getElementById('SubTitle').value = ' ';
            document.getElementById('Body').value = ' ';
            setShowDiv(false);
          });
      });
    });
  };

  return (
    <div className='AddNewsPage0'>
      {showDiv && div}
      <form className='AddNewsForm0' onSubmit={onSubmit}>
        <label>תמונת החדשות</label>
        <input id='FileName' type='file' onChange={onFileChange} required />
        <label>כתורת החדשות</label>
        <input
          type='text'
          placeholder='נא להכניס כתורת החדשות'
          id='Title'
          onChange={(e) => {
            SetNewsTitle(e.target.value);
          }}
          required
        />
        <label> כתורת משנית לחדשות</label>
        <input
          type='text'
          placeholder='נא להכניס כתורת'
          id='SubTitle'
          onChange={(e) => {
            setNewsSubTitle(e.target.value);
          }}
          required
        />
        <label> גוף החדשות</label>
        <textarea
          cols='30'
          rows='10'
          id='Body'
          onChange={(e) => {
            setNewsBody(e.target.value);
          }}
          required></textarea>
        <input
          className='SubmitButton'
          id='Submit'
          type='submit'
          value='submit'
        />
      </form>
    </div>
  );
};

export default AdminAddNews;
