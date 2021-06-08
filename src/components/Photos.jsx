/** @format */
import '../style/Photos.css';
import useDataBase from '../hooks/useDataBase';
import Preview from './Preview';

const Photos = () => {
  const list = useDataBase('GalleryImges'); 
  return (
    <div className="Gallery">
      <h1>תמונות</h1>
    <div className='GalleryPhotos'>
      
      {list.docs.map((item, index) => {
        return (
          <div className='GalleryImg' key={index}>
            <Preview key={index} element={item}/>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Photos;
