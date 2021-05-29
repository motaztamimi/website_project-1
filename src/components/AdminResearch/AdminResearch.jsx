/** @format */
import { useHistory } from 'react-router-dom';
import useDataBase from '../../hooks/useDataBase';
import { storage } from '../../config/firebase';
import { dataBase } from '../../config/firebase';
import { AiOutlineUser } from 'react-icons/ai';

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
      console.log(Researches.doc);
      return Researches.docs;
    }
    return Researches.docs.slice(0, len);
  }
  function toggle() {
    setClick(!isclick);
  }
  // console.log(Researches.docs);
  return (
    <div>
      <div className='AddResearchesButtonDiv'>
      <a href='/Admin'>
      <AiOutlineUser title="AdminPage" className='EditSlideShowPage2' id='accessIMG' color='#151e4d' />
      </a>
        <button
          onClick={() => {
            history.push('/Admin/AdminResearch/AddResearch');
          }}
          className='AddResearchesButton'>
          Add Research
        </button>
      </div>
      <div className='container'>
        {getResearches().map((research) => {
          console.log("the res is "+research.name);
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
                <div className='ResearchesContent'>
                  <h3>{research.name}</h3>
                </div>
              </div>
              <hr />
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
