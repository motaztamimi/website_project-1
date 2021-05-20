/** @format */
import { useHistory } from 'react-router-dom';

const NewsCard = ({ news }) => {
  let history = useHistory();
  return (
    <div
      className='NewsCard'
      onClick={() => {
        history.push(`News/${news.id}`);
      }}>
      <div className='CardImg'>
        <img className='NewsCardimg' src={news.NewsImage} alt='' />
      </div>
      <div className='CardBody'>
        <h1>{news.NewsTitle}</h1>
        <h3>{news.NewsSubTitle}</h3>
      </div>
    </div>
  );
};

export default NewsCard;
