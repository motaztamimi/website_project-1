import Branch from './Branch'
import img0 from '../imges/hospital.jpg'
import '../style/Branches.css'
const Branches = () => {
  const list = [
    { id: 1, text: "ביה''ח כפר שאול", img: img0 },
    { id: 2, text: "ביה''ח איתנים ", img: img0 },
    { id: 3, text: "השירות הקהילתי", img: img0 },
  ];
  
  return(
    <div className="Branches">
        {list.map((element)=>(
            <Branch key = {element.id} bbranch={element}/>
        ))}
    </div>
  )};

export default Branches;
