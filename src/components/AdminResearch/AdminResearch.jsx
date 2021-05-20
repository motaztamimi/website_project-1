/** @format */
import { useHistory } from 'react-router-dom';
import useDataBase from '../../hooks/useDataBase';
import { storage } from '../../config/firebase';
import { dataBase } from '../../config/firebase';

import { motion } from 'framer-motion';
import './AdminResearch.css';
import { useState } from 'react';

const AdminResearch = () => {
  const [isclick, setClick] = useState(false);
  let history = useHistory();
  const Researches = useDataBase('Researches');

  const deleteResearch = (res) => {
    const colecstion = dataBase.collection('Researches');

    const item = colecstion.doc(res.id);
    const storageRef = storage.refFromURL(res.fileUrl);
    storageRef.delete();
    item.delete();
  };

  let max = Researches.docs.length / 2;
  let len = Math.round(max);

  function getResearches() {
    if (isclick) {
      return Researches.docs;
    }
    return Researches.docs.slice(0, len);
  }
  function toggle() {
    setClick(!isclick);
  }
  console.log(Researches.docs);
  return (
    <div>
      <div className='AddResearchesButtonDiv'>
        <button
          onClick={() => {
            history.push('/Admin/AdminResearch/AddResearch');
          }}
          className='AddResearchesButton'>
          Add news
        </button>
      </div>
      <div className='container'>
        {getResearches().map((research) => {
          return (
            <motion.div className='ResearchesDiv' key={research.id} layout>
              <input
                type='button'
                value='X'
                onClick={() => {
                  deleteResearch(research);
                }}
              />
              <div className='NewCARD'>
                <img src={research.NewsImage} alt='' />
                <div className='ResearchesContent'>
                  <h1>{research.NewsTitle}</h1>
                  <h3>{research.NewsSubTitle}</h3>
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

export default AdminResearch;
