/** @format */
import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import '../style/ScrollToTop.css';
import { Icon, InlineIcon } from '@iconify/react';
import chevronUp from '@iconify-icons/fa/chevron-up';
const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) {
    return false;
  }

  return (
    <div className='scrollToTop cursor-pointer' onClick={scrollToTop}>
      <div className='Icondiv'>
        <Icon icon={chevronUp} color='white' width='20px' />
      </div>
    </div>
  );
};

export default ScrollToTop;
