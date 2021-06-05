/** @format */

import '../style/AdminEditGallery.css';
import AdminGalleryContent from './AdminGalleryContent';
import UploadPhotoFrom from './UploadPhotoForm';
import { AiOutlineUser } from 'react-icons/ai';
import ListAdmin from './ListAdmin';
const AdminEditGallery = () => {
  return (
    <div className="listAdminInG">
      <div className="listt">
        <ListAdmin/>
      </div>
      <div className='AdminGallery'>
      <h1 className='GalleryHeading'>הגלאריה שלך </h1>
      <a href='/Admin'>
      <AiOutlineUser title="AdminPage" className='EditSlideShowPage2' id='accessIMG' color='#151e4d' />
      </a>
      <UploadPhotoFrom collection={'GalleryImges'} />
      <AdminGalleryContent collection={'GalleryImges'} />
    </div>
    </div>
    
  );
};

export default AdminEditGallery;
