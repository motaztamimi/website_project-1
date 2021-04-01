
import './App.css';
import Header from "./components/Header"
import SlideShow from "./components/SlideShow"
import {useState} from "react"
import Events from "./components/Events"
import News from './components/News'
import img1 from './imges/News1.jpeg';


const news = [{
  id: 1,
  title: 'גאווה ישראלית – שנה שלישית ברציפות',
  brife: ' שיבא ב-TOP 10 של צמרת בתי החולים הטובים ביותר בעולם',
  img: `${process.env.PUBLIC_URL}/imges/News1.jpeg`
},
{
  id: 2,
  title: 'גאווה ישראלית – שנה שלישית ברציפות',
  brife: ' שיבא ב-TOP 10 של צמרת בתי החולים הטובים ביותר בעולם',
  img: `${process.env.PUBLIC_URL}/imges/News1.jpeg`
},
{
  id: 3,
  title: 'גאווה ישראלית – שנה שלישית ברציפות',
  brife: ' שיבא ב-TOP 10 של צמרת בתי החולים הטובים ביותר בעולם',
  img: `${process.env.PUBLIC_URL}/imges/News1.jpeg`
},
]

function App() {

const news = [{
  id: 1,
  title: 'גאווה ישראלית – שנה שלישית ברציפות',
  brife: ' שיבא ב-TOP 10 של צמרת בתי החולים הטובים ביותר בעולם',
  img: `${process.env.PUBLIC_URL}/imges/News1.jpeg`
},
{
  id: 2,
  title: 'גאווה ישראלית – שנה שלישית ברציפות',
  brife: ' שיבא ב-TOP 10 של צמרת בתי החולים הטובים ביותר בעולם',
  img: `${process.env.PUBLIC_URL}/imges/News1.jpeg`
},
{
  id: 3,
  title: 'גאווה ישראלית – שנה שלישית ברציפות',
  brife: ' שיבא ב-TOP 10 של צמרת בתי החולים הטובים ביותר בעולם',
  img: `${process.env.PUBLIC_URL}/imges/News1.jpeg`
},
]


  const [events,Setevents]=useState([
    {
      id:'1',
      CardTitle:'firstone',
      CardSubtitle:'first',
      date:'2thFeb',
      body:'הפלונטר והבחירות לנשיאות: האם יו"ר הכנסת לוין ייכנס לנעלי ריבלין? ',
      img:'../imges/event1.jpg',
    },
    {
      id:'2',
      CardTitle:'Secondone',
      CardSubtitle:'Second',
      date:'3thFeb',
      body:'הפלונטר והבחירות לנשיאות: האם יו"ר הכנסת לוין ייכנס לנעלי ריבלין?',
      img:'../imges/event2.jpg',
    },{
      id:'3',
      CardTitle:'thirdone',
      CardSubtitle:'third',
      date:'3thFeb',
      body:'הפלונטר והבחירות לנשיאות: האם יו"ר הכנסת לוין ייכנס לנעלי ריבלין?',
      img:'../imges/event3.jpg'
    }
    
])
  

  return (
    <div className="App">
      <Header/>
      <SlideShow/>
      <section className='MainSection'>
      <section className="NewsAndEvents">
      <News News={news}/>
      <Events events={events}/>
      </section>
      <section className='Ads'>
        <img src={img1} alt=""/>
        <img src={img1} alt=""/>
        <img src={img1} alt=""/>
        <img src={img1} alt=""/>
        <img src={img1} alt=""/>
      </section>
      </section>
    </div>
  );
}

export default App;
