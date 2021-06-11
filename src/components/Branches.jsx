/** @format */

import Branch from './Branch';
import img0 from '../imges/KfarSaoul.jpg';
import img1 from '../imges/Etanim.jpg';
import img2 from '../imges/Sherot.jpg';
import '../style/Branches.css';
const Branches = () => {
  const list = [
    { id: 1, text: "ביה''ח כפר שאול", img: img0, url: 'kfarShaol' },
    { id: 2, text: "ביה''ח איתנים ", img: img1, url: 'Etanim' },
    { id: 3, text: 'השירות הקהילתי', img: img2, url: 'sherotKhelate' },
  ];

  return (
    <div className='Branches'>
      {list.map((element) => (
        <Branch key={element.id} bbranch={element} />
      ))}
    </div>
  );
};

export default Branches;
