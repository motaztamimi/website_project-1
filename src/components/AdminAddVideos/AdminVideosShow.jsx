import useDataBase from '../../hooks/useDataBase';
import {  dataBase } from '../../config/firebase';
import { motion } from 'framer-motion';
const AdminVideosShow = ({ collection }) => {
  const Videos = useDataBase(collection);

  const clickHandel = (item) => {
    const id = item.id;
    
    const collectionRef = dataBase.collection(collection);
        collectionRef.doc(id).delete();
    };

  return (
    <motion.div className='VideosShow' layout>
      {Videos.docs.map((Video, index) => {
        return (
          <motion.div className='VideoFF' key={index}>
            <button
              className='VideosDelete'
              onClick={() => {
                clickHandel(Video);
              }}>
              {' '}
              X{' '}
            </button>
            <iframe src={Video.VideoURL} alt='' title='videos'/>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default AdminVideosShow;
