/** @format */

// import DropDown from './DropDown';
import { Link } from 'react-router-dom';
import '../style/Nav.css';
const Nav = () => {
  return (
    <div className='NavBar'>
      <ul>
        <li>
          <Link to='/about'> מי-אנחנו</Link>
          {/* <DropDown items={['שלום', 'היי', 'לול']} /> */}
        </li>
        <li>
          <a href="#m2">מחלקות</a>
          {/* <DropDown items={['שלום', 'היי', 'לול']} /> */}
        </li>
        <li>
          <a href="#m3">נושאים</a>
          {/* <DropDown items={['שלום', 'היי', 'לול']} /> */}
        </li>
        <li>
          <a href="#m4">המרכזשלנו</a>
          {/* <DropDown items={['שלום', 'היי', 'לול']} /> */}
        </li>
        <li>
          <a href="#m5">חדשות</a>
          {/* <DropDown items={['שלום', 'היי', 'לול']} /> */}
        </li>
        <li>
          <a href="#m6">גלריה</a>
          {/* <DropDown items={['שלום', 'היי', 'לול']} /> */}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
