/** @format */

import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../style/CenterMe.css';
const CenterMe = ({ element }) => {
  const isSSR = typeof window !== 'undefined';
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });
  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }
  React.useEffect(() => {
    window.addEventListener('resize', changeWindowSize);

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);
  let count = -1;
  let styleB ={};
  let styleShow ={};
  let cont={}
  if (windowSize.width >= 2000) {
    count = 4;
    if (element.length <= count) {
      count = element.length;
    }
    styleB={
      display:"none",
    };
  }
  if (windowSize.width >= 900 ) {
    count = 4;
    if (element.length <= count) {
      count = element.length;
    }
    styleShow.gridTemplateColumns = "10% 80% 10%";
  }
  if (windowSize.width >= 700 && windowSize.width < 900) {
    count = 3;
    if (element.length <= count) {
      count = element.length;
    }
    styleShow.gridTemplateColumns = "10% 80% 10%";
  }
  if (windowSize.width >= 500 && windowSize.width < 700) {
    count = 2;
    if (element.length <= count) {
      count = element.length;
    }
    styleShow.gridTemplateColumns = "10% 80% 10%";
  }
  if (windowSize.width < 500) {
    count = 1;
    if (element.length <= count) {
      count = element.length;
    }
    styleShow.gridTemplateColumns = "10% 80% 10%";
    cont.paddingLeft="25px";
  }
  return (
    <section id='m4' className='Center_ContainerC'>
    <h2 id='m14'> המרכז שלנו</h2>
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={120}
      totalSlides={element.length}
      visibleSlides={count}
      touchEnabled={true}>
      <div className='sliderrC' style={styleShow}>
        <div className='BackkC' style={styleB}>
          <ButtonBack className="button11">&#10094;</ButtonBack>
        </div>
        <div className="cont" style={cont}>
          <Slider>
            {element.map((e) => (
              <Slide key={e.id}>
                <div className='contenerSC'>
                  <div className='one-cardC'>
                    <img src={e.img} alt='' />
                      <h3>
                      {e.body}
                      </h3>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
        </div>
        <div className='nexttC' style={styleB}>
          <ButtonNext className="button2">&#10095;</ButtonNext>
        </div>
      </div>
    </CarouselProvider>
     </section>
  );
};
export default CenterMe;
