import useDataBase from '../../hooks/useDataBase';
import { storage, dataBase } from '../../config/firebase';
import { motion } from 'framer-motion';
const AdminSlideShowPhotos = ({ collection }) => {
  const photos = useDataBase(collection);

  const clickHandel = (item) => {
    const id = item.id;
    const url = item.url;
    const storageRef = storage.refFromURL(url);
    const collectionRef = dataBase.collection(collection);
    storageRef.delete().then(() => {
      collectionRef.doc(id).delete();
    });
  };

  return (
    <motion.div className='SlideShowPhotos' layout>
      {photos.docs.map((photo, index) => {
        return (
          <motion.div className='SlidePhoto' key={index}>
            <button
              className='SlidePhotoDelete'
              onClick={() => {
                clickHandel(photo);
              }}>
              {' '}
              X{' '}
            </button>
            <img src={photo.url} alt='' />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default AdminSlideShowPhotos;
