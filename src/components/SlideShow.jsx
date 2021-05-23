/** @format */

import '../style/SlideShow.css';

import { useState, useEffect } from 'react';
import useDataBase from '../hooks/useDataBase';
const SlideShow = ({ collection }) => {
  //this props is the array that we will get from the server.
  const [slidenum, setSlide] = useState(1);
  const [firstrender, setfirstrender] = useState(false);
  var photoArray = useDataBase(collection).docs;

  const [res, setRes] = useState([]);

  useEffect(() => {
    if (photoArray.length === 0) {
      return;
    }
    setfirstrender(true);
    if (photoArray.length % 2 === 1) {
      photoArray.push(photoArray[0]);
    }
    const temp = [];
    while (photoArray.length > 0) {
      //split the array into twos.
      const chunk = photoArray.splice(0, 2);
      temp.push(chunk);
    }
    setfirstrender(true);
    setRes(temp);
  }, [photoArray]);

  useEffect(() => {
    if (firstrender) {
      Showslide(1);
    }
    setfirstrender(false);
  }, [firstrender]);

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

  return (
    <div className='slideShow-container'>
      {res.map(function (element, i) {
        return (
          <div className='myslide' key={i} style={{ display: 'none' }}>
            <div>
              <img src={element[0].url} alt='' />
              <img src={element[1].url} alt='' />
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
