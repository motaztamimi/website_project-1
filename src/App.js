
import './App.css';
import Header from "./components/Header"
import SlideShow from "./components/SlideShow"
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
  return (
    <div className="App">
      <Header/>
      <SlideShow/>
      <section className='MainSection'>
      <section className="NewsAndEvents">
      <News News={news}/>
      <News News={news}/>
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
