/** @format */

import '../style/AdminHomePage.css';
import { GrGallery } from 'react-icons/gr';
import { BiNews, BiIdCard, BiSlideshow,BiVideo,BiBot,BiSearchAlt,BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { AiFillHome,GrLogout } from 'react-icons/ai';
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
      <a href='/'>
        <AiFillHome className='logOutButton2' color='#151e4d' />
      </a>
      <section className='gridSec'>
      <section className='gridSec0'>
        <div className='AdminHomePageOp'>
          <Link to='/Admin/EditGallery'>
            <GrGallery size='100px'></GrGallery>
          </Link>
          <h3>עריכת גלאריה</h3>
        </div>
        <div className='AdminHomePageOp'>
          <Link to='/Admin/EditNews'>
            <BiNews size='100px'></BiNews>
            <h3> עריכת חדשות</h3>
          </Link>
        </div>
        <div className='AdminHomePageOp'>
          <Link to='/Admin/EditEvents'>
            <BiVideo size='100px'></BiVideo>
            <h3>עריכת סרטונים</h3>
          </Link>
        </div>
        <div className='AdminHomePageOp'>
          <Link to='/Admin/EditEvents'>
            <BiBot size='100px'></BiBot>
            <h3>עריכת בוט</h3>
          </Link>
        </div>
        </section>
        <section className='gridSec1'>

        <div className='AdminHomePageOp'>
          <Link to='/Admin/EditSlideShow'>
            <BiSlideshow size='100px'></BiSlideshow>
            <h3>עריכת תמנות מתחלפות </h3>
          </Link>
        </div>
        <div className='AdminHomePageOp'>
          <Link to='/Admin/EditPages'>
            <BiEdit size='100px'></BiEdit>
            <h3>עריכת מחלקות </h3>
          </Link>
        </div>
        <div className='AdminHomePageOp'>
          <Link to='/Admin/AdminEditDoctors'>
            <BiIdCard size='100px'></BiIdCard>
            <h3>רופאים</h3>
          </Link>
        </div>
        <div className='AdminHomePageOp'>
          <Link to='/Admin/AdminResearch'>
            <BiSearchAlt size='100px'></BiSearchAlt>
            <h3>עריכת מחקרים </h3>
          </Link>
        </div>
        </section>

      </section>
    </div>
  );
};

export default AdminHomePage;
