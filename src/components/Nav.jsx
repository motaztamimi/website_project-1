/** @format */
import { Link } from 'react-router-dom';
import '../style/Nav.css';
const Nav = () => {
  return (
    <div className='NavBar'>
      <ul>
        <li>
          <Link to='/AboutUs'> מי-אנחנו</Link>
        </li>
        <li>
          <a href='#m2'>מחלקות</a>
        </li>
        <li>
          <a href='#m3'>נושאים</a>
        </li>
        <li>
          <a className='m4' href='#m4'>
            המרכז-שלנו
          </a>
        </li>
        <li>
          <a href='#m5'>חדשות</a>
        </li>
        <li>
          <a href='#m6'>גלריה</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
