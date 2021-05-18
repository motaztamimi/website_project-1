/** @format */

import useDataBase from '../hooks/useDataBase';
import { dataBase } from '../config/firebase';
import { motion } from 'framer-motion';

const AdminGalleryContent = ({ collection }) => {
  const { docs } = useDataBase(collection);

  const deletePhoto = (doc) => {
    const collectionRef = dataBase.collection(collection);
    const item = collectionRef.doc(doc.id);
    item.delete();
  };

  return (
    <div className='AdminGalleryContent'>
      {docs &&
        docs.map((doc) => {
          return (
            <motion.div
              className='AdminGalleryImg'
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}>
              <input
                type='button'
                value='X'
                onClick={() => {
                  deletePhoto(doc);
                }}
              />
              <img src={doc.url} alt='uploaded pic' />
            </motion.div>
          );
        })}
    </div>
  );
};

export default AdminGalleryContent;
