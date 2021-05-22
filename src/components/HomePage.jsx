/** @format */

import SlideShow from './SlideShow';
import News from './News';

import Information from './Information';
import '../style/HomePage.css';
import useDataBase from '../hooks/useDataBase';
import Subjects from './Subjects';
import Centers from './Centers';
import Gallery from './Gallery';
import Line from './Line';
import Nav from './Nav';
import ScrollToTop from './ScrollToTop';

const HomePage = () => {
  let Nmews = useDataBase('News');
  const subject = [
    {
      id: 1,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest.png`,
    },
    {
      id: 2,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest1.png`,
    },
    {
      id: 3,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest2.png`,
    },
    {
      id: 4,
      body: 'מערך ומזון',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest3.png`,
    },
    {
      id: 5,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest4.png`,
    },
    {
      id: 6,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest5.png`,
    },
    {
      id: 7,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest6.png`,
    },
    {
      id: 8,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest7.png`,
    },
    {
      id: 9,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest8.png`,
    },
    {
      id: 10,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest9.png`,
    },
    {
      id: 11,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest10.png`,
    },
    {
      id: 12,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest11.png`,
    },
    {
      id: 13,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest.png`,
    },
  ];
  const Center = [
    {
      id: 1,
      body: 'רפואה',
      img: `${process.env.PUBLIC_URL}/imges/Center.jpg`,
    },
    {
      id: 2,
      body: 'סיעוד',
      img: `${process.env.PUBLIC_URL}/imges/Center1.jpg`,
    },
    {
      id: 3,
      body: 'מנהלומשק',
      img: `${process.env.PUBLIC_URL}/imges/Center2.jpg`,
    },
    {
      id: 4,
      body: 'מערך ומזון',
      img: `${process.env.PUBLIC_URL}/imges/Center3.jpg`,
    },
    {
      id: 5,
      body: 'מערך ',
      img: `${process.env.PUBLIC_URL}/imges/Center4.jpg`,
    },
  ];

  <script src='https://code.iconify.design/1/1.0.7/iconify.min.js'></script>;
  return (
    <>
      <section className='MainContainer'>
        <Nav />
        <SlideShow collection={'HomePage/photos/slideShow'} />
        <Information />
        <Line />
        <Subjects Sub={subject} />
        <Line />
        <Centers Cent={Center} />
        <Line />
        <News News={Nmews.docs} howmany={true} />
        <Gallery />
        <ScrollToTop />
      </section>
    </>
  );
};

export default HomePage;
