/** @format */
import '../style/Centers.css';
import Center from './Center';
import { useState, useEffect } from 'react';
const Centers = ({ Cent }) => {
  const [Centerr, setCenteer] = useState({
    firstone: 1,
    secondone: 2,
  });
  let cen;
  function getCenter() {
    cen = Cent;
    if (window.innerWidth < 800) {
      let mot;
      if (Centerr.secondone == 1) {
        console.log('im ad');
        mot = cen.filter((act) => act.id == Centerr.firstone);
        let z = cen.filter((act) => act.id == Centerr.secondone);
        mot = [...mot, z];
        cen = mot;
      } else {
        mot = cen.filter(
          (act) => act.id == Centerr.secondone || act.id == Centerr.firstone
        );
      }
      console.log(mot);
      return mot;
    }
    return cen;
  }
  function plusCenter(n) {
    setCenteer({
      firstone: Centerr.secondone,
      secondone: Centerr.secondone + n,
    });

    if (Centerr.secondone == Object.keys(Cent).length) {
      console.log(
        'imhere first ' + Centerr.firstone + 'secons' + Centerr.secondone
      );
      setCenteer({ firstone: Centerr.firstone, secondone: 1 });
    }

    return n;
  }

  function minousCenter(n) {
    return n;
  }
  useEffect(() => {
    console.log(
      'getcenter before first' +
        Centerr.firstone +
        ' before second ' +
        Centerr.secondone
    );
  });
  return (
    <section className='Center_Container'>
      <h2> המרכז שלנו</h2>
      <section className='Center_row'>
        {getCenter().map((cen) => {
          return <Center key={cen.id} CENTER={cen} />;
        })}
      </section>
      <button className='prev_Center' onClick={() => minousCenter(-1)}>
        &#10095;
      </button>
      <button className='next_Center' onClick={() => plusCenter(1)}>
        &#10094;
      </button>
    </section>
  );
};

export default Centers;
