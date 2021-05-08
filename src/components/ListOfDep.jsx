import DepListPiece from './DepListPiece';
import '../style/ListOfDep.css';
import img1 from '../imges/kfarShaul2.jpg';
const ListOfDep = () => {
  const list = [
    { id: 1, text: 'מייון והשייה' },
    { id: 2, text: "מחלקה פעילה (סגורה) א'" },
    { id: 3, text: "מחלקה פעילה (פתוח) ב'" },
    { id: 4, text: "מחלקה פעילה ממושכת ג' (פסיכוגריאטריה) " },
    { id: 5, text: "מחלקה פעילה ממושכת (סגורה) ד' " },
    { id: 6, text: " מחלקה פעילה (סגורה) ה' (פסיכוגריאטריה)" },
    { id: 7, text: 'אשפוז יום' },
  ];
  return (
    <section className='Maincontener'>
      <h1>כפר שאול</h1>
      <img src={img1} />
      <div className='titleText'>
        <p>מחלקות יחידות ושירותים בקמפוס כפר שאול</p>
      </div>
      <div className='Brancheskk'>
        {list.map((element) => (
          <DepListPiece bbranch={element} key={element.id} />
        ))}
      </div>
    </section>
  );
};

export default ListOfDep;
