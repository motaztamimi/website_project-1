/** @format */

import img1 from '../imges/1.jpg';
import img2 from '../imges/2.jpg';
import img3 from '../imges/3.jpg';
import img4 from '../imges/4.jpg';
import img5 from '../imges/5.jpg';
import img6 from '../imges/6.jpg';
import img7 from '../imges/7.jpg';
import '../style/SlideShow.css';

import { useState, useEffect } from 'react';
const SlideShow = ({ collection }) => {
  //this props is the array that we will get from the server.
  const [slidenum, setSlide] = useState(1);
  const [firstrender, setfirstrender] = useState(true);
  var photoArray = [];

  photoArray.push(img1);
  photoArray.push(img2);
  photoArray.push(img3);
  photoArray.push(img4);
  photoArray.push(img5);
  photoArray.push(img6);
  photoArray.push(img7);
  //photoArray.push(img8);
  if (photoArray.length % 2 === 1) {
    photoArray.push(photoArray[0]);
  }
  var res = [];
  while (photoArray.length > 0) {
    //split the array into twos.
    const chunk = photoArray.splice(0, 2);
    res.push(chunk);
  }

  const Showslide = (n) => {
    let i;
    let slide = document.getElementsByClassName('myslide');
    let a = Array.from(slide);
    let curentindex = n;
    if (curentindex > a.length) {
      curentindex = 1;
    }
    if (curentindex <= 0) {
      curentindex = a.length;
    }
    for (i = 0; i < a.length; i++) {
      a[i].style.display = 'none';
    }

    a[curentindex - 1].style.display = 'block';
    setSlide(curentindex);
  };

  function plusSlides(n) {
    Showslide(slidenum + n);
  }
  useEffect(() => {
    Showslide(1);
    setfirstrender(false);
  }, [firstrender]);

  return (
    <div className='slideShow-container'>
      {res.map(function (element, i) {
        return (
          <div className='myslide' key={i}>
            <div>
              <img src={element[0]} alt='' />
              <img src={element[1]} alt='' />
            </div>
          </div>
        );
      })}

      <button className='prev' onClick={() => plusSlides(-1)}>
        &#10094;
      </button>
      <button className='next' onClick={() => plusSlides(1)}>
        &#10095;
      </button>
    </div>
  );
};

export default SlideShow;
