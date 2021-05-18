/** @format */

import '../style/Subject.css';

const Subject = ({ subj }) => {
  return (
    <div className='Subject'>
      <img src={subj.img} alt='' />
      <h5>{subj.body}</h5>
    </div>
  );
};

export default Subject;
