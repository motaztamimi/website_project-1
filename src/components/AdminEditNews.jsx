/** @format */
import { useHistory } from 'react-router-dom';

const AdminEditNews = () => {
  let history = useHistory();

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
