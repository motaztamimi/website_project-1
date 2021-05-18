/** @format */

const NewsCard = ({ news }) => {
  return (
    <div className='NewsCard'>
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
