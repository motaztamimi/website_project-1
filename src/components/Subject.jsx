/** @format */

import '../style/Subject.css';
import { useHistory } from 'react-router-dom';
const Subject = ({ subj }) => {
  const history = useHistory();
  return (
    <div
      className='Subject'
      onClick={() => {
        history.push('./pdf');
      }}>
      <img src={subj.img} alt='' />
      <h5>{subj.body}</h5>
    </div>
  );
};

export default Subject;
