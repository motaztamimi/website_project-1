/** @format */

import '../style/AdminEditGallery.css';
import AdminGalleryContent from './AdminGalleryContent';
import UploadPhotoFrom from './UploadPhotoForm';
const AdminEditGallery = () => {
  return (
    <div className='AdminGallery'>
      <h1 className='GalleryHeading'>הגלאריה שלך </h1>
      <UploadPhotoFrom collection={'GalleryImges'} />
      <AdminGalleryContent collection={'GalleryImges'} />
    </div>
  );
};

export default AdminEditGallery;
