import React, { useEffect, useState } from 'react';
import '../style/InsidePage.css';
import { dataBase } from '../config/firebase';
import DoctorSlid from '../components/DoctorSlid'
const InsidePage3 = ({ department, url }) => {
  const [sec, setSec] = useState({
    first: '',
    fourth: '',
    second: '',
    theird: '',
  });
  const [header, setHeder] = useState('');
  useEffect(() => {
    const collectionRef = dataBase.collection('Departments');
    const doc = collectionRef.doc(department);

    doc.get().then((item) => {
      const dep = item.data()['Deps'][url];
      setSec({ ...item.data()[dep] });
      setHeder(dep);
    });
  }, [department, url]);

  useEffect(() => {
    let manger = Array.from(document.getElementsByClassName('managers'))[0];
    let info = Array.from(document.getElementsByClassName('fewWords'))[0];
    let workingDays = Array.from(
      document.getElementsByClassName('workingDays')
    )[0];
    let contact = Array.from(document.getElementsByClassName('contact'))[0];
    manger.innerHTML = '<h1>מנהלים</h1>' + sec['second'];
    info.innerHTML = '<h1>מידע</h1>' + sec['first'];
    if(sec['fourth']!=''){
      workingDays.innerHTML = '<h1>ימי פעולה</h1>' + sec['fourth'];
    }else{
      workingDays.innerHTML = '';
    }
    
    contact.innerHTML = '<h1>צור קשר</h1>' + sec['theird'];
  }, [sec]);
  return (
    <div>
      <section className='page003'>
        <div className='titlePage'>
          <h1>{header}</h1>
        </div>
        <div className='page002'>
          <div className='sidePage'>
            <div className='managers'></div>
            <div className='contact'>
              <p>מספרי הטלפון הציבורי במחלקה: 02-6551530, 02-6551531</p>
            </div>
            <div className='workingDays'></div>
          </div>
          <div className='fewWords'>
            <p className='ql-align-right'>&nbsp;</p>
          </div>
        </div>
      </section>
      <DoctorSlid/>
    </div>
  );
};

export default InsidePage3;
