import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import DoctorCard from './DoctorCard';
import img0 from '../imges/manger.jpg';
import img1 from '../imges/manger3.jpg';
import img2 from '../imges/manger2.jpg';
import '../style/DoctorSlid.css';
import useDataBase from '../hooks/useDataBase';
const DoctorSlid = () => {
  const a = [
    'מיון והשהייה',
    'מחלקה פעילה (סגורה) א׳',
    'מחלקה פעילה (פתוחה) ב׳',
    'מחלקה פעילה ממושכת ג׳(פסיכוגריאטריה)',
    'מחלקה פעילה ממושכת (סגורה) ד׳',
    'מחלקה פעילה (סגורה) ה׳(פסיכוגריאטריה)',
    'אשפוז יום',
  ];
  const b = [
    'חדר מיון',
    'מחלקה פעילה (סגורה) א׳',
    'מחלקה פעילה (פתוחה) ב׳',
    'מחלקת אוטיסטים',
    'מחלקה נשים',
    'מחלקת המשך (אוטיסטים)',
    'המחלקה לטיפול בילדים ובנוער על-שם דונלד כהן',
  ];
  const c = [
    'המרפאה הקהילתית לבריאות הנפש-רח׳ שלום יהודה',
    'המרפאה הקהילתית לבריאות הנפש-קרית יובל (בוגרים)',
    'התחנה לבריאות הנפש-קרית יובל (ילדים ונוער)',
    'המרפאה הקהיתית לבריאות הנפש - בית שמש',
    'המרפאה הקהיתית לבריאות הנפש - מעלה אדומים',
    'המכון לטיפול בבעיות סמים ותחלואה כפולה - תלפיות',
    'התחנה לטיפול בילד ובנוער - רח׳ החי״ש קטמון',
    'היחידה לגיל הרך',
    'מרפאה שיקומית - עיר גנים',
    'המרכז לטיפול יום אינטנסיבי - ארנונה',
  ];
  const DataDoctors = useDataBase('Doctors').docs;
  const path = window.location.pathname;
  let depO = "";
  let depI = "";
  let flag=0;
  for (let i = 0; i < path.length; i++) {
    if(flag===1 && path[i]!=="/"){
      depO+=path[i];
    }
    if(flag===2 && path[i]!=="/"){
      depI+=path[i];
    }
    if (path[i]==="/") {
      flag+=1;
    }
  }
  const nameDepO=[{text:"כפר שאול"},{text:"איתנים"},{text:"שירות קהילתי"}];
  const departmentOut=[{id:0,name:"kfarShaol"},{id:1,name:"Etanim"},{id:2,name:"sherotKhelate"}];
  let flagg=-1;
  for (let i = 0; i < nameDepO.length; i++) {
    if(depO===departmentOut[i].name){
      flagg=departmentOut[i].id;
    }
  }
  const inn=[{text:a},{text:b},{text:c}];
  let depIn=inn[flagg].text[depI];
  const oout=DataDoctors.filter(e=>e.DepartmentOut==nameDepO[flagg].text);
  const iin = oout.filter(e=>e.DepartmentIn==depIn);
    const isSSR = typeof window !== "undefined";
    const [windowSize, setWindowSize] = React.useState({
      width: isSSR ? 1200 : window.innerWidth,
      height: isSSR ? 800 : window.innerHeight,
    });
    function changeWindowSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    React.useEffect(() => {
      window.addEventListener("resize", changeWindowSize);
  
      return () => {
        window.removeEventListener("resize", changeWindowSize);
      };
    }, []);
    let count = 5;
    if (windowSize.width>3100) {
      count=7;
    }
    if (windowSize.width>=2200 && windowSize.width<=3100) {
      count=6;
    }
    if (windowSize.width>=1150 && windowSize.width<2200) {
      count=5;
    }
    if (windowSize.width>=900 && windowSize.width<1150) {
      count=4;
    }
    if (windowSize.width>=700 && windowSize.width<900) {
      count=3;
    }
    if (windowSize.width>=500 && windowSize.width<700) {
      count=2;
    }
    if (windowSize.width<500) {
      count=1;
    }
  return (
    <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={120}
        totalSlides={iin.length}
        visibleSlides={count}
        touchEnabled={true}>
        <div className='sliderr'>
          <div className='Backk'>
            <ButtonBack>&#10094;</ButtonBack>
          </div>
          <div>
            <Slider>
              {iin.map((element) => (
                <Slide index={element.id} key={element.id}>
                  <DoctorCard key={element.id} index={element} />
                </Slide>
              ))}
            </Slider>
          </div>
          <div className='nextt'>
            <ButtonNext>&#10095;</ButtonNext>
          </div>
        </div>
      </CarouselProvider>
  )
}

export default DoctorSlid
