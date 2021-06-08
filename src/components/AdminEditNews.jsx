/** @format */
import { useHistory } from 'react-router-dom';
import useDataBase from '../hooks/useDataBase';
import { storage } from '../config/firebase';
import { dataBase } from '../config/firebase';
import { AiOutlineUser } from 'react-icons/ai';
import { motion } from 'framer-motion';
import '../style/AdminEditNews.css';
import { React, useState } from 'react';
import AdminAddNews from './adminAddNews/AdminAddNews.jsx';
import { AiFillEdit } from 'react-icons/ai';

const AdminEditNews = () => {
  const [isclick, setClick] = useState(false);
  const [NewsTitleE, setNewsTitleE] = useState('');
  const [NewsSubTitleE, setNewsSubTitleE] = useState('');
  const [NewsBodyE, setNewsBodyE] = useState('');
  const [NewsImageE, SetNewsImageE] = useState('');
  const [NewsE, setNewsE] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg', 'img/jpg'];

  let history = useHistory();
  const News = useDataBase('News');
  const [StyleFlag, setStyleFlag] = useState('');
  const deleteNew = (newq) => {
    const colecstion = dataBase.collection('News');

    const item = colecstion.doc(newq.id);
    const storageRef = storage.refFromURL(newq.NewsImage);
    storageRef.delete();
    item.delete();
  };

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
  function exitFormEditNews(e) {
    setStyleFlag(0);
  }
  const editorNews = (News) => {
    setStyleFlag(1);
    setNewsE(News);
    setFile(null);
    setNewsTitleE(News.NewsTitle);
    setNewsSubTitleE(News.NewsSubTitle);
    setNewsBodyE(News.NewsBody);
    SetNewsImageE(News.NewsImage);
  };

  let max = News.docs.length / 2;
  let len = Math.round(max);

  function getNews() {
    if (isclick) {
      return News.docs;
    }
    return News.docs.slice(0, len);
  }

  function editNewsFunc(e) {
    e.preventDefault();
    if (file !== null) {
      const storageRef = storage.ref(`News/${file.name}`);
      let url;
      storageRef.put(file).then((snapshot) => {
        storageRef.getDownloadURL().then((data) => {
          url = data;
          const storageRef = storage.refFromURL(NewsE.NewsImage);
          storageRef.delete();
          const colecstion = dataBase
            .collection('News')
            .doc(NewsE.id)
            .update({
              NewsImage: url,
            });
        });
      });
    }
    const colecstion = dataBase
      .collection('News')
      .doc(NewsE.id)
      .update({
        NewsTitle: NewsTitleE,
        NewsSubTitle: NewsSubTitleE,
        NewsBody: NewsBodyE,
      })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  }

  function styleEditNews() {
    if (StyleFlag !== 1) {
      const style = {
        display: 'none',
      };
      return style;
    }
  }
  function toggle() {
    setClick(!isclick);
  }

  return (
    <div className='addNewsGrid'>
      {/* <div className='overlyEditNews' style={styleEditNews()}>
        <button onClick={exitFormEditNews}>X</button>
        <h1 id='editorTitleNews'>עריכת הרופא הרצוי</h1>
        <form id='FormEditor' onSubmit={editNewsFunc}>
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
            defaultValue={NewsSubTitleE}
            onChange={(e) => {
              setNewsSubTitleE(e.target.value);
            }}
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

          <input
            className='submitButtonNews'
            type='submit'
            value='Submit'
            onClick={exitFormEditNews}
          />
        </form>
      </div> */}
      <div className='AddNewsButtonDiv'>
        <AdminAddNews />
        <a href='/Admin'>
          <AiOutlineUser
            title='AdminPage'
            className='EditSlideShowPage2'
            id='accessIMG'
            color='#151e4d'
          />
        </a>
      </div>
      <div className='containerr'>
        {getNews().map((Newa) => {
          return (
            <motion.div className='NewsDiv' key={Newa.id} layout>
              <div className='DeleteAndEditNews'>
                <input
                  type='button'
                  value='X'
                  onClick={() => {
                    deleteNew(Newa);
                  }}
                />

                <button
                  className='EditioNEWS'
                  onClick={() => {
                    //editorNews(Newa);
                    history.push(`/Admin/EditNews/${Newa.id}`);
                  }}>
                  <AiFillEdit />
                </button>
              </div>
              <div className='NewCARD'>
                <img src={Newa.NewsImage} alt='' />
                <div className='NewsContent'>
                  <h1>{Newa.NewsTitle}</h1>
                  <h3>{Newa.NewsSubTitle}</h3>
                </div>
              </div>
              <hr />
            </motion.div>
          );
        })}
        <section>
          <input
            className='MoreNewsButton'
            type='button'
            value={isclick ? 'חסר חדשות' : 'עוד חדשות'}
            onClick={toggle}
          />
        </section>
      </div>
    </div>
  );
};

export default AdminEditNews;
