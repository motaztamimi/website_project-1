/** @format */
import '../style/Centers.css';
import { useHistory } from 'react-router-dom';

const Center = ({ CENTER }) => {
  let history = useHistory();
  return (
    <div
      className='Center'
      onClick={() => {
        history.push('/OurCenter');
      }}>
      <img src={CENTER.img} alt='' />
      <h5>{CENTER.body}</h5>
    </div>
  );
};

export default Center;
