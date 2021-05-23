/** @format */

import LineInResearchPage from './LineInResearchPage';
import '../../style/AllResearchs.css';
import useDataBase from '../../hooks/useDataBase';

function AllResearchs() {
  const Researches = useDataBase('Researches');

  return (
    <div>
      <h1 id='title'>מחקרים</h1>
      <div className='AllResearchContainer'>
        {Researches &&
          Researches.docs.map((item) => {
            return (
              <LineInResearchPage
                name={item.name}
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
