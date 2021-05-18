/** @format */
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import '../style/MobNav.css';

const MobNav = () => {
  return (
    <div className='MobNav'>
      <div>
        <input type='text' placeholder='חיפוש' />
        <button>
          <BsSearch size='20px' color='white' />
        </button>
      </div>
      <ul>
      <li>
          <Link to='/about'> מי-אנחנו</Link>
        </li>
        <li>
          <a href="#m2">מחלקות</a>
        </li>
        <li>
          <a href="#m3">נושאים</a>
        </li>
        <li>
          <a className="m4" href="#m4">המרכזשלנו</a>
        </li>
        <li>
          <a href="#m5">חדשות</a>
        </li>
        <li>
          <a href="#m6">גלריה</a>
        </li>
      </ul>
    </div>
  );
};

export default MobNav;
