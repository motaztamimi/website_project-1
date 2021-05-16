/** @format */
import { useHistory } from 'react-router-dom';
import useDataBase from '../hooks/useDataBase';
import Events from '../components/Events';
import '../style/AdminEditNews.css';
const AdminEditNews = () => {
  let history = useHistory();
  const News = useDataBase('News');

  console.log(News);
  return (
    <div>
      <div className='AddNewsButtonDiv'>
        <button
          onClick={() => {
            history.push('/Admin/EditNews/AddNews');
          }}
          className='AddNewsButton'>
          Add news
        </button>
      </div>

      {<Events news={News.docs} />}
    </div>
  );
};

export default AdminEditNews;
