/** @format */

import React from 'react';
import '../AdminAddDoctors/AddDoctors.css';

import { useEffect, useState } from 'react';
import { dataBase } from '../../config/firebase';
import '../../style/AdminEditNews.css';
import { useHistory } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

import { storage } from '../../config/firebase';

const AdminEditNews1 = () => {
  let fritstime = 0;
  const collectionRef = dataBase.collection('News');
  const [news, setnews] = useState(undefined);
  const [NewsTitleE, setNewsTitleE] = useState('');
  const [NewsSubTitleE, setNewsSubTitleE] = useState('');
  const [NewsBodyE, setNewsBodyE] = useState('');
  const [NewsImageE, SetNewsImageE] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [bollean, setbollean] = useState(false);
  const [bollean1, setbollean1] = useState(false);
  const types = ['image/png', 'image/jpeg', 'img/jpg'];
  let history = useHistory();
  const currentURL = window.location.href;
  let resa = currentURL.split('/');
  const [showDiv, setShowDiv] = useState(false);

  const div = (
    <div className='loading'>
      <div className='loader'></div>
    </div>
  );
  useEffect(() => {
    collectionRef
      .doc(resa[5])
      .get()
      .then((item) => {
        setnews(item.data());
        setbollean(true);
      });
    console.log('imhere 11');
  }, [true]);
  useEffect(() => {
    if (news && fritstime === 0) {
      console.log('imhere in use effect');

      setFile(null);
      setNewsTitleE(news.NewsTitle);
      setNewsSubTitleE(news.NewsSubTitle);
      setNewsBodyE(news.NewsBody);
      SetNewsImageE(news.NewsImage);
      setbollean1(true);
      setbollean(false);
      fritstime = 1;
    }
  }, [bollean]);
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
    setShowDiv(true);
    if (file !== null) {
      const storageRef = storage.ref(`News/${file.name}`);
      let url;
      storageRef.put(file).then((snapshot) => {
        storageRef.getDownloadURL().then((data) => {
          url = data;
          const storageRef = storage.refFromURL(news.NewsImage);
          storageRef.delete();
          const colecstion = dataBase
            .collection('News')
            .doc(resa[5])
            .update({
              NewsImage: url,
            });
        });
      });
    }
    const colecstion = dataBase
      .collection('News')
      .doc(resa[5])
      .update({
        NewsTitle: NewsTitleE,
        NewsSubTitle: NewsSubTitleE,
        NewsBody: NewsBodyE,
      })
      .then(() => {
        setShowDiv(false);
        history.push('/Admin/EditNews');
      });
  };

  return (
    <div>
      {bollean1 ? (
        <div className='AddDoctorsPage'>
          <a href='/Admin'>
            <AiOutlineUser
              title='AdminPage'
              className='EditSlideShowPage2'
              id='accessIMG'
              color='#151e4d'
            />
          </a>
          {showDiv && div}
          <form id='FormEditor' className='AddDoctorsForm' onSubmit={onSubmit}>
            <h1 id='editorTitleNews'>עריכת חדשות </h1>
            <label>תמונת החדשות</label>
            <br />

            <input type='file' onChange={onFileChange} />
            <br />
            <label>כתורת החדשות</label>
            <br />

            <input
              className='inputEditorNews'
              id='input1'
              type='text'
              defaultValue={NewsTitleE}
              onChange={(e) => {
                setNewsTitleE(e.target.value);
              }}
            />
            <br />
            <label>כתורת משנית לחדשות</label>
            <br />

            <input
              className='inputEditorNews'
              type='text'
              id='input2'
              onChange={(e) => {
                setNewsSubTitleE(e.target.value);
              }}
              defaultValue={NewsSubTitleE}
            />
            <br />
            <label>גוף החדשות</label>
            <br />

            <input
              className='inputEditorNews'
              type='text'
              id='input3'
              defaultValue={NewsBodyE}
              onChange={(e) => {
                setNewsBodyE(e.target.value);
              }}
            />

            <br />
            <br />
            <br />

            <input className='submitButtonNews' type='submit' value='Submit' />
          </form>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default AdminEditNews1;
