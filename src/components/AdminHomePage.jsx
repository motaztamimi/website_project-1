/** @format */

import '../style/AdminHomePage.css';
import { GrGallery } from 'react-icons/gr';
import { BiNews, BiCalendarEvent, BiSlideshow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';

const AdminHomePage = () => {
  return (
    <div className='AdminHomePage'>
      <button
        className='logOutButton'
        onClick={(e) => {
          auth.signOut();
        }}>
        יציאה
      </button>
      <img
        src={`${process.env.PUBLIC_URL}/imges/AdminHomePageBackGround.jpeg`}
        alt=''
      />
      <section className='gridSec'>
        <div className='AdminHomePageOp'>
          <Link to='/Admin/EditGallery'>
            <GrGallery size='150px'></GrGallery>
          </Link>
          <h3>עריכת גלאריה</h3>
        </div>
        <div className='AdminHomePageOp'>
          <Link to='/Admin/EditNews'>
            <BiNews size='150px'></BiNews>
            <h3> עריכת חדשות</h3>
          </Link>
        </div>
        <div className='AdminHomePageOp'>
          <Link to='/Admin/EditEvents'>
            <BiCalendarEvent size='150px'></BiCalendarEvent>
            <h3>עריכת אירועים</h3>
          </Link>
        </div>
        <div className='AdminHomePageOp'>
          <Link to='/Admin/EditSlideShow'>
            <BiSlideshow size='150px'></BiSlideshow>
            <h3>עריכת תמנות מתחלפות </h3>
          </Link>
        </div>
        <div className='AdminHomePageOp'>
          <Link to='/Admin/EditPages'>
            <BiSlideshow size='150px'></BiSlideshow>
            <h3>עריכת מחלקות </h3>
          </Link>
        </div>
        <div className='AdminHomePageOp'>
          <Link to='/Admin/AdminEditDoctors'>
            <BiNews size='150px'></BiNews>
            <h3>רופאים</h3>
          </Link>
        </div>
        <div className='AdminHomePageOp'>
          <Link to='/Admin/AdminResearch'>
            <BiSlideshow size='150px'></BiSlideshow>
            <h3>עריכת מחקרים </h3>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AdminHomePage;
