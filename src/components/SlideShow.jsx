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
import '../style/SlideShow.css';

import useDataBase from '../hooks/useDataBase';
const SlideShow = ({ collection }) => {
  const SlideShows = useDataBase(collection).docs;

  let count = 2;

  return (
    <CarouselProvider
      naturalSlideWidth={16}
      naturalSlideHeight={355}
      totalSlides={SlideShows.length}
      visibleSlides={count}
      // touchEnabled={true}
      isPlaying={true}
      infinite={true}
      step={2}
      playDirection={'forward'}
      interval={6000}>
      <div className='slideShow-container'>
        <div>
          <Slider className='myslide'>
            {SlideShows.map((element) => (
              <Slide index={element.id} key={element.id}>
                <img src={element.url} alt='' />
              </Slide>
            ))}
          </Slider>
        </div>
        <ButtonBack className='prev'>&#10094;</ButtonBack>
        <ButtonNext className='next'>&#10095;</ButtonNext>
      </div>
    </CarouselProvider>
  );
};
export default SlideShow;
