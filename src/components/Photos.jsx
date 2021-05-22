/** @format */

import '../style/Photos.css';
import useDataBase from '../hooks/useDataBase';
import PreveiwMode from './preveiwMode/PreveiwMode';

const Photos = () => {
  const list = useDataBase('GalleryImges');

  return (
    <div className='GalleryPhotos'>
      {list.docs.map((item, index) => {
        return (
          <div className='GalleryImg' key={index}>
            <img src={item.url} alt='img' />
          </div>
        );
      })}
    </div>
  );
};

export default Photos;
