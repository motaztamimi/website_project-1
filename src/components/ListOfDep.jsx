import DepListPiece from './DepListPiece';
import '../style/ListOfDep.css';
import img1 from '../imges/kfarShaul2.jpg';
import { dataBase } from '../config/firebase';
import { useEffect, useState } from 'react';

const ListOfDep = ({ departmentName }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const collectionRef = dataBase.collection('Departments');

    const doc = collectionRef.doc(departmentName);

    doc.get().then((item) => {
      const dataToSet = [];
      item.data().Deps.forEach((item, index) => {
        dataToSet[index] = { text: item, url: index };
      });
      setList(dataToSet);
    });
  }, []);

  return (
    <section className='Maincontener'>
      <h1>{departmentName}</h1>
      <img src={img1} />
      <div className='titleText'>
        <p>מחלקות יחידות ושירותים בקמפוס {departmentName}</p>
      </div>
      <div className='Brancheskk'>
        {list.map((item, index) => {
          console.log(item);
          return <DepListPiece bbranch={item} key={index} />;
        })}
      </div>
    </section>
  );
};

export default ListOfDep;
