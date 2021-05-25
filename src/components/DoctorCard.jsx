import React from 'react';
import '../style/DoctorCard.css';
const DoctorCard = ({ index }) => {
  return (
    <div className='contenerS'>
      <div className='one-card'>
        <img src={index.DoctorImage} alt='Avatar' />
        <div className='card-container'>
          <h4>
            <b>{index.DoctorName}</b>
          </h4>
          <p>{index.DoctorSpecialty}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
