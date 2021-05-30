/** @format */

import '../style/AdminEditGallery.css';
import AdminGalleryContent from './AdminGalleryContent';
import UploadPhotoFrom from './UploadPhotoForm';
import { AiOutlineUser } from 'react-icons/ai';

const AdminEditGallery = () => {
  return (
    <div className='AdminGallery'>
      <h1 className='GalleryHeading'>הגלאריה שלך </h1>
      <a href='/Admin'>
      <AiOutlineUser title="AdminPage" className='EditSlideShowPage2' id='accessIMG' color='#151e4d' />
      </a>
      <UploadPhotoFrom collection={'GalleryImges'} />
      <AdminGalleryContent collection={'GalleryImges'} />
    </div>
  );
};

export default AdminEditGallery;
