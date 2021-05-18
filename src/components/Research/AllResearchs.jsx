import LineInResearchPage from './LineInResearchPage';
import '../../style/AllResearchs.css';
import useDataBase from '../../hooks/useDataBase';
import { dataBase } from '../../config/firebase';

function AllResearchs() {
  const Researches = useDataBase('Researches');

  return (
    <div>
      <h1 id='title'>מחקרים</h1>
      <div className='container'>
        {Researches &&
          Researches.docs.map((item) => {
            return (
              <LineInResearchPage
                name={'dasda'}
                url={item.fileUrl}
                key={item.id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default AllResearchs;
