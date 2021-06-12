/** @format */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop1() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
