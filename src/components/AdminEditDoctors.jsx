import React from 'react';
import '../style/AdminEditDoctors.css';
import useDataBase from '../hooks/useDataBase';
import { useHistory } from 'react-router-dom';
import { storage } from '../config/firebase';
import { dataBase } from '../config/firebase';
import {useState}from 'react';
const AdminEditDoctors = () => {
  const [isclick, setClick] = useState(false);
  const history = useHistory();

  const routeChange = () => {
    let path = '/Admin/AdminAddDoctors/AddDoctors';
    history.push(path);
  };
  const DataDoctors = useDataBase('Doctors');
  let max = DataDoctors.docs.length / 2;
  let len = Math.round(max);
  function getDoctors() {
    if (isclick) {
      return DataDoctors.docs;
    }
    return DataDoctors.docs.slice(0, len);
  }
  const deleteDoctor = (doctor) => {
    const colecstion = dataBase.collection('Doctors');
    const item = colecstion.doc(doctor.id);
    const storageRef = storage.refFromURL(doctor.DoctorImage);
    storageRef.delete();
    item.delete();
  };
  function toggle() {
    setClick(!isclick);
  }
  return (
    <div>
      <div className='AddDoctorsButtonDiv'>
        <button onClick={routeChange} className='AddDoctorsButton'>
          Add Doctors
        </button>
      </div>
      <div className='container'>
        {getDoctors().map((element) => {
          return (
            <div key={element.DoctorName}>
              <button className="x"
                onClick={() => {deleteDoctor(element);}}>x</button>
              <div className='DCARD'>
                <img src={element.DoctorImage} alt='' />
                <div className='DContent'>
                  <h1>{element.DoctorName}</h1>
                  <h3>{element.DoctorSpecialty}</h3>
                  <h3>{element.Department}</h3>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
        <section>
          <input
            className='MoreDoctorsButton'
            type='button'
            value={isclick ? 'חסר רופאים' : 'עוד רופאים'}
            onClick={toggle}
          />
        </section>
      </div>
    </div>
  );
};
export default AdminEditDoctors;
