import Header from "./Header"
import SlideShow from "./SlideShow"
import Events from "./Events"
import News from './News'
import SideWidget from './SideWidget'
import Fotter from "./Fotter" 

const HomePage = ()=>{

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

    const events = [{
        id:'1',
        CardTitle:'firstone',
        CardSubtitle:'first',
        date:'2thFeb',
        body:'הפלונטר והבחירות לנשיאות: האם יו"ר הכנסת לוין ייכנס לנעלי ריבלין? ',
        img:`${process.env.PUBLIC_URL}/imges/event1.jpg`,
      },
      {
        id:'2',
        CardTitle:'Secondone',
        CardSubtitle:'Second',
        date:'3thFeb',
        body:'הפלונטר והבחירות לנשיאות: האם יו"ר הכנסת לוין ייכנס לנעלי ריבלין?',
        img:`${process.env.PUBLIC_URL}/imges/event2.jpg`,
      },{
        id:'3',
        CardTitle:'thirdone',
        CardSubtitle:'third',
        date:'3thFeb',
        body:'הפלונטר והבחירות לנשיאות: האם יו"ר הכנסת לוין ייכנס לנעלי ריבלין?',
        img:`${process.env.PUBLIC_URL}/imges/event3.jpg`
      }]

    return(
        <>
            <Header/>
            <SlideShow/>
            <section className='MainSection'>
                <section className="NewsAndEvents">
                    <News News={news}/>
                    <Events events={events}/>
                </section>
                <section className='Ads'>
                        <SideWidget/>
                        <SideWidget/>
                        <SideWidget/>
                        <SideWidget/>

                </section>
            </section>
            <Fotter/>
        </>
    );

}

export default HomePage;
