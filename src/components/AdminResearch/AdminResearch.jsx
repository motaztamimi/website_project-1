/** @format */
import { useHistory } from 'react-router-dom';
import useDataBase from '../../hooks/useDataBase';
import { storage } from '../../config/firebase';
import { dataBase } from '../../config/firebase';
import { AiOutlineUser } from 'react-icons/ai';
import ListAdmin from '../ListAdmin';
import { motion } from 'framer-motion';
import './AdminResearch.css';
import '../../style/AllResearchs.css';
import '../../style/LineInResearchPage.css';
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
  if (max < 3) {
    max = Researches.docs.length;
  }
  let len = Math.round(max);
  const showPdf = (url) => {
    window.open(url);
  };
  function getResearches() {
    if (isclick) {
      return Researches.docs;
    }
    return Researches.docs.slice(0, len);
  }
  function toggle() {
    setClick(!isclick);
  }
  return (
    <div className='listAdminInR'>
      <div className='listR'>
        <ListAdmin />
      </div>
      <div>
        <div className='AddResearchesButtonDiv'>
          <a href='/Admin'>
            <AiOutlineUser
              title='AdminPage'
              className='EditSlideShowPage2'
              id='accessIMG'
              color='#151e4d'
            />
          </a>
          <button
            onClick={() => {
              history.push('/Admin/AdminResearch/AddResearch');
            }}
            className='AddResearchesButton'>
            הוספת מחקר{' '}
          </button>
        </div>
        <div className='AllResearchContainer AdminResarchDiv'>
          {getResearches().map((research) => {
            return (
              <motion.div
                className='ResearchesDiv ResearchesDivAdmin'
                key={research.id}
                layout>
                <div>
                  <div className='theLine AdminResarchline '>
                    <div className=' col-9 hebrwTextDiv'>
                      <div className='hebrewText'>{research.name}</div>
                    </div>
                    <div className='allButtons allButtonsAdmin'>
                      <button
                        className='btnn'
                        onClick={() => {
                          showPdf(research.fileUrl);
                        }}>
                        <span> הצג</span>
                      </button>
                      <button
                        className='btnn btnDelete'
                        onClick={() => {
                          deleteResearch(research);
                        }}>
                        <span>מחק </span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          <section>
            <input
              className='MoreResearchesButton'
              type='button'
              value={isclick ? 'חסר מחקרים' : 'עוד מחקרים'}
              onClick={toggle}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminResearch;

// /** @format */
// import { useHistory } from 'react-router-dom';
// import useDataBase from '../../hooks/useDataBase';
// import { storage } from '../../config/firebase';
// import { dataBase } from '../../config/firebase';

// import { motion } from 'framer-motion';
// import '../../style/AdminEditNews.css';
// import { useState } from 'react';

// const AdminResearch = () => {
//   const [isclick, setClick] = useState(false);

//   let history = useHistory();
//   const News = useDataBase('Researches');

//   const deleteNew = (newq) => {
//     const colecstion = dataBase.collection('Researches');

//     const item = colecstion.doc(newq.id);
//     const storageRef = storage.refFromURL(newq.fileUrl);
//     storageRef.delete();
//     item.delete();
//   };

//   let max = News.docs.length / 2;
//   let len = Math.round(max);

//   function getNews() {
//     if (isclick) {
//       return News.docs;
//     }
//     return News.docs.slice(0, len);
//   }
//   function toggle() {
//     setClick(!isclick);
//   }
//   console.log(News.docs);
//   return (
//     <div>
//       <div className='AddNewsButtonDiv'>
//         <button
//           onClick={() => {
//             history.push('/Admin/AdminResearch/AddResearch');
//           }}
//           className='AddNewsButton'>
//           Add news
//         </button>
//       </div>
//       <div className='container'>
//         {getNews().map((Newa) => {
//           return (
//             <motion.div className='NewsDiv' key={Newa.id} layout>
//               <input
//                 type='button'
//                 value='X'
//                 onClick={() => {
//                   deleteNew(Newa);
//                 }}
//               />
//               <div className='NewCARD'>
//                 <img src={Newa.NewsImage} alt='' />
//                 <div className='NewsContent'>
//                   <h1>{Newa.NewsTitle}</h1>
//                   <h3>{Newa.NewsSubTitle}</h3>
//                 </div>
//               </div>
//               <hr />
//             </motion.div>
//           );
//         })}
//         <section>
//           <input
//             className='MoreNewsButton'
//             type='button'
//             value={isclick ? 'חסר חדשות' : 'עוד חדשות'}
//             onClick={toggle}
//           />
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AdminResearch;
