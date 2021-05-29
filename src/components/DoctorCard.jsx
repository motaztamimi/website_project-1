import React from 'react';
import '../style/DoctorCard.css';
const DoctorCard = ({ index, tt }) => {
  function styleDep() {
    if (tt !== 1) {
      const f={
      display: "none"
      }
      return f;
    }
  }
  return (
    <div className='contenerS'>
      <div className='one-card'>
        <img src={index.DoctorImage} alt='Avatar' />
        <div className='card-container'>
          <h4>
            <b>{index.DoctorName}</b>
          </h4>
          <p>{index.DoctorSpecialty}</p>
          <div id='dep' style={styleDep()}>
            <p>{index.DepartmentOut}</p>
            <p>{index.DepartmentIn}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
