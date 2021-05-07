/** @format */

import '../style/AdminEditGallery.css';
import UploadPhotoFrom from './UploadPhotoForm';
const AdminEditGallery = () => {
  return (
    <div className='AdminGallery'>
      <h1 className='GalleryHeading'>הגלאריה שלך </h1>
      <UploadPhotoFrom />
      <div className='AdminGalleryContent'>
        <div className='AdminGalleryImg'>
          <input type='button' value='X' />

          <img src={`${process.env.PUBLIC_URL}/imges/event3.jpg`} alt='' />
        </div>
      </div>
    </div>
  );
};

export default AdminEditGallery;
