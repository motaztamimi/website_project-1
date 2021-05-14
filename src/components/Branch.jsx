import { Link } from 'react-router-dom';
const Branch = ({ bbranch }) => {
  return (
    <div className='cardBranch'>
      <Link to={'kfarShaol'}>
        <img className='cardBranchImg' src={bbranch.img} />
        <div className='cardContainer'>
          <h4>{bbranch.text}</h4>
        </div>
      </Link>
    </div>
  );
};

export default Branch;
