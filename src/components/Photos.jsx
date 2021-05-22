/** @format */

import '../style/Photos.css';
import useDataBase from '../hooks/useDataBase';
import PreveiwMode from './preveiwMode/PreveiwMode';

const Photos = () => {
  const list = useDataBase('GalleryImges');

  return (
    <div className='GalleryPhotos'>
      <PreveiwMode photo={list.docs[0].url} />
      {list.docs.map((item) => {
        return (
          <div className='GalleryImg'>
            <img src={item.url} alt='img' />
          </div>
        );
      })}
    </div>
  );
};

export default Photos;
