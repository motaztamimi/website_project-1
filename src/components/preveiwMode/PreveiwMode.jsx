import './PreveiwMode.css';
const PreveiwMode = ({ photo, photos }) => {
  return (
    <div className='preview'>
      <button className='left'> {'<'} </button>
      <img src={photo} alt='img' />
      <button className='right'>{'>'}</button>
    </div>
  );
};

export default PreveiwMode;
