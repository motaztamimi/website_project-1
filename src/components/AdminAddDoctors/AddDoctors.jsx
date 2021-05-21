import React from 'react';
import './AddDoctors.css';
import { dataBase, timestamp, storage } from '../../config/firebase';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const AddDoctors = () => {
  const [file, setFile] = useState(null);
  const [showDiv, setShowDiv] = useState(false);
  const history = useHistory();
  const div = (
    <div className='loading'>
      <div className='loader'></div>
    </div>
  );
  const [DoctorName, SetDoctorName] = useState('');
  const [DoctorSpecialty, setDoctorSpecialty] = useState('');
  const [Department, SetDepartment] = useState('');
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg', 'img/jpg'];
  const collectionRef = dataBase.collection('Doctors');
  const onFileChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please Select an image file (png , jpeg or jpg)');
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const storageRef = storage.ref(`Doctors/${file.name}`);
    let url;
    setShowDiv(true);
    storageRef.put(file).then((snapshot) => {
      storageRef.getDownloadURL().then((data) => {
        url = data;

        collectionRef
          .add({
            DoctorImage: url,
            DoctorName: DoctorName,
            DoctorSpecialty: DoctorSpecialty,
            Department:Department,
            createdAt: timestamp(),
          })
          .then((value) => {
            history.push('/Admin/AdminEditDoctors');
          });
      });
    });
  };

  return (
    <div>
      <div className='AddDoctorsPage'>
        {showDiv && div}
        <form className='AddDoctorsForm' onSubmit={onSubmit}>
          <label>תמונת הרופא</label>
          <input type='file' onChange={onFileChange} required />

          <label>שם הרופא</label>
          <input
            type='text'
            placeholder='נא להכניס שם הרופא'
            onChange={(e) => {
              SetDoctorName(e.target.value);
            }}
            required
          />
          <label>תפקיד הרופא</label>
          <input
            type='text'
            placeholder='נא להכניס תפקיד הרופא'
            onChange={(e) => {
              setDoctorSpecialty(e.target.value);
            }}
            required
          />
          <label>מחלקה</label>
          <input
            type='text'
            placeholder='נא להכניס מחלקה'
            onChange={(e) => {
              SetDepartment(e.target.value);
            }}
            required
          />
          <input className='SubmitButton' type='submit' value='submit' />
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;
