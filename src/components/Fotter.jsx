/** @format */

import '../style/Fotter.css';
import logo from '../imges/Logo3K.png';
import Googlemap from '../components/GoogleMap/Googlemap';
import { Link } from 'react-router-dom';
import { AiOutlineYoutube } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";

const Fotter = () => {
  const detailKfarSahoulMap = {
    width: '300',
    height: '300',
  };
  return (
    <footer className='footer'>
      <div className='Containers '>
        <div className='rows'>
          <div className='cols firstCol'>
            <img src={logo} className='logoFotter1  pt2' alt='' />

            <p className='mb10'>
              המרכז הירושלמי לבריאות הנפש (כפר שאול-איתנים) משרת את אוכלוסיית
              הערים ירושלים, בית שמש, מעלה אדומים ומבשרת ציון כמו גם את
              אוכלוסיית יישובי פרוזדור ירושלים. המרכז הירושלמי כולל שלושה
              קמפוסים לאשפוז ותחנות לטיפול בבריאות הנפש הפרושות ברחבי העיר
              ובסביבותיה.
            </p>
          
          </div>

          <div className='cols'>
            <h2 className='col_white_amrc pt2'>קישורים מהירים</h2>

            <ul className='footer_ul_amrc'>
              <li>
                <Link to='/AboutUs'> מי-אנחנו</Link>
              </li>
              <li>
                <Link to='/kfarShaol'>מחלקת כפר שאול</Link>{' '}
              </li>
              <li>
                <Link to='/Etanim'>מחלקת איתנים</Link>{' '}
              </li>
              <li>
                <Link to='/sherotKhelate'>השירות הקהילתי</Link>{' '}
              </li>
              
              <li>
                <a href='/NewsList'>חדשות</a>
              </li>
              <li>
              <Link to='/Gallery'>תמונות</Link>{' '}
              </li>
              <li>
              <Link to='/Videos'>סרטונים</Link>{' '}
              </li>
            </ul>
          </div>

         
          <div className='cols'>
            <h2 className='col_white_amrc pt2'>המיקום שלנו</h2>

            <Googlemap details={detailKfarSahoulMap} />
          </div>
        </div>
      </div>

      <div className='Down_Container'>
       
        <ul className='social_footer_ul'>
          <li>
            <a href='https://www.facebook.com/jerusalem.mental.health.center/'>
              {' '}
              <i className='material-icons' id="facebook">facebook</i>
            </a>
          </li>
          <li>
            <a href='https://www.youtube.com/results?search_query=%D7%94%D7%9E%D7%A8%D7%9B%D7%96+%D7%94%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%9E%D7%99+%D7%9C%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA+%D7%94%D7%A0%D7%A4%D7%A9'>
              {' '}
              <i className='material-icons' id="youtube"><AiOutlineYoutube/></i>
            </a>
          </li>
          <li>
            <a href='mailto:p.tzibur@moh.gov.il'>
              {' '}
              <i className='material-icons' id="email">email</i>
            </a>
          </li>
          <li>
            <a href='blank'>
              {' '}
              <i className='material-icons' id="feedback"><GrInstagram/></i>
            </a>
          </li>
        </ul>
        <p className='text-center '>
          <a href="https://github.com/MustafaAbuGhannam/website_project">
           Project Repository 2021 &copy;
        </a>
        </p>
      </div>
    </footer>
  );
};

export default Fotter;
