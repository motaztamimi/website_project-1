/** @format */

import DropDown from './DropDown';
import { Link } from 'react-router-dom';
import '../style/Nav.css';
const Nav = () => {
  return (
    <div className='NavBar'>
      <ul>
        <li>
          <Link to='/about'> מי-אנחנו</Link>
          <DropDown items={['שלום', 'היי', 'לול']} />
        </li>
        <li>
          ביה-כפר-שאול
          <DropDown items={['שלום', 'היי', 'לול']} />
        </li>
        <li>
          ביה''ח-איתנים
          <DropDown items={['שלום', 'היי', 'לול']} />
        </li>
        <li>
          השירות-הקהילתי
          <DropDown items={['שלום', 'היי', 'לול']} />
        </li>
        <li>
          מחקרים,ופעילות-אקדמית <DropDown items={['שלום', 'היי', 'לול']} />
        </li>
        <li>
          רפואה,סיעוד,מינהל
          <DropDown items={['שלום', 'היי', 'לול']} />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
