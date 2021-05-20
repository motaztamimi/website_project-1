import React from 'react';
import '../style/DoctorCard.css'
const DoctorCard = ({ index }) => {
  return (
    <div>
      <div class='one-card'>
        <img src={index.img} alt='Avatar'/>
        <div class='card-container'>
          <h4>
            <b>{index.name}</b>
          </h4>
          <p>{index.text}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
