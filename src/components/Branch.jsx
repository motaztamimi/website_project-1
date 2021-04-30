/** @format */

const Branch = ({ bbranch }) => {
  return (
    <div className='cardBranch'>
      <a href='#'>
        <img className='cardBranchImg' src={bbranch.img} />
        <div className='cardContainer'>
          <h4>{bbranch.text}</h4>
        </div>
      </a>
    </div>
  );
};

export default Branch;
