import '../style/DepListPiece.css';
import { Link } from 'react-router-dom';

const DepListPiece = ({ bbranch }) => {
  return (
    <div className='column'>
      <Link
        to={`${window.location.pathname}/${bbranch.url}`
          .replace(' ', '')
          .replace(' ', '')
          .replace(' ', '')
          .replace(' ', '')
          .replace(' ', '')
          .replace(' ', '')
          .replace(' ', '')}>
        <div className='card'>
          <div className='cardContent'>
            <p className='p1'>{bbranch.text}</p>
            <p className='p2'>&gt;</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default DepListPiece;
