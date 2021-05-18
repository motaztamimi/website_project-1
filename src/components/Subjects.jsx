/** @format */

import '../style/Subject.css';
import Subject from './Subject';
import { useState } from 'react';
const Subjects = ({ Sub }) => {
  const max = 12;
  const [isclick, setClick] = useState(false);
  function getSubject() {
    if (isclick) {
      return Sub;
    }
    return Sub.slice(0, max);
  }
  function toggle() {
    setClick(!isclick);
  }

  return (
    <section className='Subject_Container'>
      <h2 id="m3"> נושאים</h2>
      <section className='Subject_row'>
        {getSubject().map((sub) => {
          return <Subject key={sub.id} subj={sub} />;
        })}
      </section>
      <button key='56' onClick={toggle}>
        {isclick ? '-חסר נושאים' : ' +עוד נושאים'}
      </button>
    </section>
  );
};

export default Subjects;
