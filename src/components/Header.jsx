/** @format */

import { BsSearch } from 'react-icons/bs';
import MoblieHeader from './MobHeader';
import '../style/Header.css';
import Accessibility from './Accessibility/Accessibility';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {
  const history = useHistory();
  const [searchString, setSearchString] = useState('');
  const SearchButtonClick = () => {
    if (!searchString) {
      return;
    }
    if (`/Search/${searchString}` === history.location) {
      console.log(true);
    }
    if (history.location.pathname.includes('/Search')) {
      window.location.pathname = `/Search/${searchString}`;
    }

    history.push(`/Search/${searchString}`);
  };
  return (
    <>
      <div className='Header'>
        <div className='HeaderContanier'>
          <div className='HeaderUpperSection'>
            <a href='/'>
              <img src={`${process.env.PUBLIC_URL}/imges/LOGONEW.jpg`} alt='' />
            </a>
            <div>
              <div className='accessLeft'>
                <input
                  type='text'
                  placeholder='חיפוש'
                  onChange={(e) => {
                    setSearchString(e.target.value);
                  }}
                />
                <button onClick={SearchButtonClick} className='SearchButton'>
                  <BsSearch size='20px' color='white' />
                </button>
                <Accessibility />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MoblieHeader />
    </>
  );
};

export default Header;
