import '../style/AdminHomePage.css';
import { GrGallery } from 'react-icons/gr';
import { BiNews, BiCalendarEvent, BiSlideshow } from 'react-icons/bi';
import { auth } from '../config/firebase';
import { useEffect } from 'react';

const AdminHomePage = () => {
  useEffect(() => {
    return () => {
      auth.signOut();
      console.log('cleanup');
    };
  }, []);

  return (
    <div className='AdminHomePage'>
      <img
        src={`${process.env.PUBLIC_URL}/imges/AdminHomePageBackGround.jpeg`}
        alt=''
      />
      <section className='gridSec'>
        <div className='AdminHomePageOp'>
          <GrGallery size='150px'></GrGallery>
          <h3>עריכת גלאריה</h3>
        </div>
        <div className='AdminHomePageOp'>
          <BiNews size='150px'></BiNews>
          <h3> עריכת חדשות</h3>
        </div>
        <div className='AdminHomePageOp'>
          <BiCalendarEvent size='150px'></BiCalendarEvent>
          <h3>עריכת אירועים</h3>
        </div>
        <div className='AdminHomePageOp'>
          <BiSlideshow size='150px'></BiSlideshow>
          <h3>עריכת תמנות מתחלפות </h3>
        </div>
      </section>
    </div>
  );
};

export default AdminHomePage;
