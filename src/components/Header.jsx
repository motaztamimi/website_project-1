/** @format */

import { BsSearch } from 'react-icons/bs';
import MoblieHeader from './MobHeader';
import '../style/Header.css';
import Accessibility from './Accessibility/Accessibility';
const Header = () => {
  return (
    <>
      <div className='Header'>
        <div className='HeaderContanier'>
          <div className='HeaderUpperSection'>
            <img src={`${process.env.PUBLIC_URL}/imges/LOGONEW.jpg`} alt='' />
            <div>
              <div className='accessLeft'>
                <input type='text' placeholder='חיפוש' />
                <div className='accessLeft'>
                  <button>
                    <BsSearch size='20px' color='white' />
                  </button>
                  <Accessibility />
                </div>
              </div>
            </div>
          </div>
          {/*    <Nav /> */}
        </div>
      </div>
      <MoblieHeader />
    </>
  );
};

export default Header;
