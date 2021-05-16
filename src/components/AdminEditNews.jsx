/** @format */
import { useHistory } from 'react-router-dom';
import useDataBase from '../hooks/useDataBase';

const AdminEditNews = () => {
  let history = useHistory();
  const News = useDataBase('News');

  console.log(News);

  return (
    <button
      onClick={() => {
        history.push('/Admin/EditNews/AddNews');
      }}>
      Add news
    </button>
  );
};

export default AdminEditNews;
