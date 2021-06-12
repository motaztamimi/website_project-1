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
import ListAdmin from './ListAdmin';
const AdminEditNews = () => {
  const [isclick, setClick] = useState(false);

  let history = useHistory();
  const News = useDataBase('News');

  const deleteNew = (newq) => {
    const colecstion = dataBase.collection('News');

    const item = colecstion.doc(newq.id);
    const storageRef = storage.refFromURL(newq.NewsImage);
    storageRef.delete();
    item.delete();
  };

  let max = News.docs.length / 2;
  let len = Math.round(max);

  function getNews() {
    if (isclick) {
      return News.docs;
    }
    return News.docs.slice(0, len);
  }

  function toggle() {
    setClick(!isclick);
  }

  return (
    <div className='listAdminn'>
      <div className='ll'>
        <ListAdmin />
      </div>
      <div className='addNewsGrid'>
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
    </div>
  );
};

export default AdminEditNews;
