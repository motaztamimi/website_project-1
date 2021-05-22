/** @format */
import { useHistory } from 'react-router-dom';
import useDataBase from '../hooks/useDataBase';
import { storage } from '../config/firebase';
import { dataBase } from '../config/firebase';

import { motion } from 'framer-motion';
import '../style/AdminEditNews.css';
import { useState } from 'react';

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
  console.log(News.docs);
  return (
    <div>
      <div className='AddNewsButtonDiv'>
        <button
          onClick={() => {
            history.push('/Admin/EditNews/AddNews');
          }}
          className='AddNewsButton'>
          Add news
        </button>
      </div>
      <div className='containerr'>
        {getNews().map((Newa) => {
          return (
            <motion.div className='NewsDiv' key={Newa.id} layout>
              <input
                type='button'
                value='X'
                onClick={() => {
                  deleteNew(Newa);
                }}
              />
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
