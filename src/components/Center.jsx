/** @format */
import '../style/Centers.css';

const Center = ({ CENTER }) => {
  return (
    <div className='Center'>
      <img src={CENTER.img} />
      <h5>{CENTER.body}</h5>
    </div>
  );
};

export default Center;
