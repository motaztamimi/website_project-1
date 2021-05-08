/** @format */

import SlideShow from './SlideShow';
import Events from './Events';
import News from './News';
import SideWidget from './SideWidget';

import Information from './Information';
import img1 from '../imges/newsimg1.jpg';
import img2 from '../imges/newsimg2.jpg';
import '../style/HomePage.css';

import Subjects from './Subjects';
import Centers from './Centers';
import Gallery from './Gallery';
import Line from './Line';
const HomePage = () => {
  const subject = [
    {
      id: 1,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest.png`,
    },
    {
      id: 2,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest.png`,
    },
    {
      id: 3,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest.png`,
    },
    {
      id: 4,
      body: 'מערך ומזון',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest.png`,
    },
    {
      id: 5,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest.png`,
    },
    {
      id: 6,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest.png`,
    },
    {
      id: 7,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest.png`,
    },
    {
      id: 8,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest.png`,
    },
    {
      id: 9,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest.png`,
    },
    {
      id: 10,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest.png`,
    },
    {
      id: 11,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest.png`,
    },
    {
      id: 12,
      body: 'מחקר',
      img: `${process.env.PUBLIC_URL}/imges/subjecttest.png`,
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
      img: `${process.env.PUBLIC_URL}/imges/Center.jpg`,
    },
    {
      id: 3,
      body: 'מנהלומשק',
      img: `${process.env.PUBLIC_URL}/imges/Center.jpg`,
    },
    {
      id: 4,
      body: 'מערך ומזון',
      img: `${process.env.PUBLIC_URL}/imges/Center.jpg`,
    },
    {
      id: 5,
      body: 'מערך ',
      img: `${process.env.PUBLIC_URL}/imges/Center.jpg`,
    },
  ];

  const news = [
    {
      id: 1,
      title: 'גאווה ישראלית – שנה שלישית ברציפות',
      brife: ' שיבא ב-TOP 10 של צמרת בתי החולים הטובים ביותר בעולם',
      img: `${process.env.PUBLIC_URL}/imges/newsimg2.jpg`,
    },
    {
      id: 2,
      title: 'גאווה ישראלית – שנה שלישית ברציפות',
      brife: ' שיבא ב-TOP 10 של צמרת בתי החולים הטובים ביותר בעולם',
      img: `${process.env.PUBLIC_URL}/imges/newsimg3.jpg`,
    },
    {
      id: 3,
      title: 'גאווה ישראלית – שנה שלישית ברציפות',
      brife: ' שיבא ב-TOP 10 של צמרת בתי החולים הטובים ביותר בעולם',
      img: `${process.env.PUBLIC_URL}/imges/News1.jpeg`,
    },
  ];

  const events = [
    {
      id: '1',
      CardTitle: 'firstone',
      CardSubtitle: 'first',
      date: '2thFeb',
      body:
        'הפלונטר והבחירות לנשיאות: האם יו"ר הכנסת לוין ייכנס לנעלי ריבלין? ',
      img: `${process.env.PUBLIC_URL}/imges/event1.jpg`,
    },
    {
      id: '2',
      CardTitle: 'Secondone',
      CardSubtitle: 'Second',
      date: '3thFeb',
      body: 'הפלונטר והבחירות לנשיאות: האם יו"ר הכנסת לוין ייכנס לנעלי ריבלין?',
      img: `${process.env.PUBLIC_URL}/imges/event2.jpg`,
    },
    {
      id: '3',
      CardTitle: 'thirdone',
      CardSubtitle: 'third',
      date: '3thFeb',
      body: 'הפלונטר והבחירות לנשיאות: האם יו"ר הכנסת לוין ייכנס לנעלי ריבלין?',
      img: `${process.env.PUBLIC_URL}/imges/event3.jpg`,
    },
  ];

  return (
    <>
      <section className='MainContainer'>
        <SlideShow />
        <Information />
        <Line />
        <Subjects Sub={subject} />
        <Line />
        <Centers Cent={Center} />
        <Line />

        <News News={news} />

        <Gallery />
      </section>

      {/*  

      <section className='MainSection'>
        <section className='NewsAndEvents'>
         
          <Events events={events} />
        </section>
        <section className='Ads'>
          <SideWidget photo={img1} />
          <SideWidget photo={img2} />
          <SideWidget photo={img1} />
          <SideWidget photo={img2} />
        </section>
      </section> */}
    </>
  );
};

export default HomePage;
