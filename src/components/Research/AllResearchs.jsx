import LineInResearchPage from './LineInResearchPage';
import '../../style/AllResearchs.css';
import useDataBase from '../../hooks/useDataBase';

function AllResearchs() {
  var x = '';
  const { Researches } = useDataBase('Researches');

  return (
    <div>
      <h1 id='title'>מחקרים</h1>
      <div className='container'>
        {Researches &&
          Researches.map((item, index) => {
            {
              console.log(item);
            }
            return (
              <LineInResearchPage
                key={index}
                name={'Researches'}
                url={item.fileUrl}
              />
            );
          })}
      </div>
    </div>
  );
}

export default AllResearchs;
