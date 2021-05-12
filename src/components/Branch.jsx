import { Link } from 'react-router-dom';
const Branch = ({ bbranch }) => {
  return (
    <div className='cardBranch'>
      <Link to={`/${bbranch.text}`}>
        <img className='cardBranchImg' src={bbranch.img} />
        <div className='cardContainer'>
          <h4>{bbranch.text}</h4>
        </div>
      </Link>
    </div>
  );
};

export default Branch;
