import React, { useEffect, useState } from 'react';
import './Noseem.css';
import { dataBase } from '../../config/firebase';
function Noseem({ department, url }) {
  const [header, setHeder] = useState('');
  const [theData, settheData] = useState('');
  useEffect(() => {
    const collectionRef = dataBase.collection('Departments');
    const doc = collectionRef.doc('אחר');

    doc.get().then((item) => {
      console.log(item.data()['pages'][url]);
      const dep = item.data()['pages'][url];
      // console.log(item.data()[dep].data);
      settheData(item.data()[dep].first);
      setHeder(dep);
    });
  }, [department, url]);
  if (theData !== '') document.getElementById('inside').innerHTML = theData;
  return (
    <div>
      <h1 className='noseemHeader'>{header}</h1>
      <div id='inside'></div>
    </div>
  );
}

export default Noseem;
