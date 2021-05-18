/** @format */

import location from '../imges/Location.png';
import '../style/Fotter.css';
import logo from '../imges/Logo3.jpg';

const Fotter = () => {
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
            <p>
              <i className=''></i>ירושלים -אבו טור{' '}
            </p>
            <p>
              <i className=''></i> 0584999430{' '}
            </p>
            <p>
              <i className=''></i>motaztamimi82@gmail.com
            </p>
          </div>

          <div className='cols'>
            <h5 className='col_white_amrc pt2'>קישורים מהירים</h5>

            <ul className='footer_ul_amrc'>
              <li>
                <a href='blank'>חדשות</a>
              </li>
              <li>
                <a href='blank'>אירועים </a>
              </li>
              <li>
                <a href='blank'>צילומים </a>
              </li>
              <li>
                <a href='blank'>מכללה</a>
              </li>
              <li>
                <a href='blank'>הנדסה</a>
              </li>
              <li>
                <a href='blank'>אני מועתז </a>
              </li>
            </ul>
          </div>

          <div className='cols'>
            <h5 className='headin5_amrc col_white_amrc pt2'>קישורים מהירים</h5>

            <ul className='footer_ul_amrc'>
              <li>
                <a href='blank'>צילומים</a>
              </li>
              <li>
                <a href='blank'>צילומים </a>
              </li>
              <li>
                <a href='blank'>צילומים </a>
              </li>
              <li>
                <a href='blank'>צילומים</a>
              </li>
              <li>
                <a href='blank'>צילומים</a>
              </li>
              <li>
                <a href='blank'>צילומים</a>
              </li>
            </ul>
          </div>
          <div className='cols'>
            <h5 className='col_white_amrc pt2'>המיקום שלנו</h5>
            <img src={location} className='location' alt='' />
          </div>
        </div>
      </div>

      <div className='Down_Container'>
        <ul className='foote_bottom_ul_amrc'>
          <li>
            <a href='blank'>דף הבית</a>
          </li>
          <li>
            <a href='blank'>ף הבית</a>
          </li>
          <li>
            <a href='blank'>ף הבית</a>
          </li>
          <li>
            <a href='blank'>ף הבית</a>
          </li>
          <li>
            <a href='blank'>ף הבית</a>
          </li>
          <li>
            <a href='blank'>ף הבית</a>
          </li>
        </ul>

        <p className='text-center '>
          מועתז תמימי | קובי ראית 2017<a href='blank'>Samsung</a>
        </p>

        <ul className='social_footer_ul'>
          <li>
            <a href='blank'>
              {' '}
              <i className='material-icons'>facebook</i>
            </a>
          </li>
          <li>
            <a href='blank'>
              {' '}
              <i className='material-icons'>favorite</i>
            </a>
          </li>
          <li>
            <a href='blank'>
              {' '}
              <i className='material-icons'>email</i>
            </a>
          </li>
          <li>
            <a href='blank'>
              {' '}
              <i className='material-icons'>feedback</i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Fotter;
