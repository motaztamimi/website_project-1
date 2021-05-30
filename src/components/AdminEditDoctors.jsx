/** @format */

import { React, useState } from 'react';
import '../style/AdminEditDoctors.css';
import useDataBase from '../hooks/useDataBase';
import { useHistory } from 'react-router-dom';
import { storage } from '../config/firebase';
import { dataBase } from '../config/firebase';
import { AiOutlineUser } from 'react-icons/ai';
import DoctorCard from './DoctorCard';
import { AiFillEdit } from 'react-icons/ai';
import { event } from 'jquery';
const AdminEditDoctors = () => {
  const [DoctorName0, SetDoctorName0] = useState('');
  const [DoctorSpecialty0, setDoctorSpecialty0] = useState('');
  const [DepartmentOut0, SetDepartmentOut0] = useState('');
  const [DepartmentIn0, SetDepartmentIn0] = useState('');
  const [doctorE, setdoctorE] = useState('');
  const [editorS, seteditorS] = useState('');
  const [isclick, setClick] = useState(false);
  const history = useHistory();
  const routeChange = () => {
    let path = '/Admin/AdminAddDoctors/AddDoctors';
    history.push(path);
  };
  const editDoctorF = (doctor) => {
    seteditorS(1);
    setdoctorE(doctor);
    SetDoctorName0(doctor.DoctorName);
    setDoctorSpecialty0(doctor.DoctorSpecialty);
    SetDepartmentOut0(doctor.DepartmentOut);
    SetDepartmentIn0(doctor.DepartmentIn);
    console.log(document.getElementById('input1').value);
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
  function editDoctor00(e) {
    e.preventDefault();
    const colecstion = dataBase
      .collection('Doctors')
      .doc(doctorE.id)
      .update({
        DoctorName: DoctorName0,
        DoctorSpecialty: DoctorSpecialty0,
        DepartmentOut: DepartmentOut0,
        DepartmentIn: DepartmentIn0,
      })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });

    // const item = colecstion
    // const storageRef = storage.refFromURL(doctorE.DoctorImage);
    // storageRef.updateMetadata();
    // item.update
  }
  function toggle() {
    setClick(!isclick);
  }
  function value() {
    if (isclick) {
      return 'חסר רופאים';
    } else {
      return 'עוד רופאים';
    }
  }
  function styleEdit() {
    if (editorS !== 1) {
      const f = {
        display: 'none',
      };
      return f;
    }
  }
  return (
    <div className='DoctorBody'>
      <div className='buttonAddDoctors'>
        <a href='/Admin'>
          <AiOutlineUser
            title='AdminPage'
            className='EditSlideShowPage2'
            id='accessIMG'
            color='#151e4d'
          />
        </a>
        <button onClick={routeChange}>Add Doctors</button>
      </div>
      <div className='doctoerDetails'>
        {getDoctors().map((element) => {
          return (
            <div className='doctoerDetailsIn' key={element.DoctorName}>
              <div className='towButton'>
                <div>
                  <button
                    className='buttonX'
                    onClick={() => {
                      deleteDoctor(element);
                    }}>
                    x
                  </button>
                </div>
                <div className='ff'>
                  <button
                    className='editorD'
                    onClick={() => {
                      editDoctorF(element);
                    }}>
                    <AiFillEdit />
                  </button>
                </div>
              </div>
              <div className='cardd'>
                {<DoctorCard index={element} tt={1} />}
              </div>
            </div>
          );
        })}
      </div>
      <div className='buttonShowDoctor'>
        <button onClick={toggle}>{value()}</button>
      </div>
      <div className='editorDoctor' style={styleEdit()}>
        <form id='FORMD' onSubmit={editDoctor00}>
          <label>שם הרופה:</label>
          <input
            className='motaz'
            id='input1'
            type='text'
            defaultValue={DoctorName0}
            onChange={(e) => {
              SetDoctorName0(e.target.value);
            }}
          />
          <label>תפקיד הרופה:</label>
          <input
            className='motaz'
            type='text'
            id='input2'
            defaultValue={DoctorSpecialty0}
            onChange={(e) => {
              setDoctorSpecialty0(e.target.value);
            }}
          />
          <label>קאמפוס:</label>
          <input
            className='motaz'
            type='text'
            id='input3'
            defaultValue={DepartmentOut0}
            onChange={(e) => {
              SetDepartmentOut0(e.target.value);
            }}
          />
          <label>מחלקה:</label>
          <inpu
            className='motaz'
            type='text'
            id='input4'
            defaultValue={DepartmentIn0}
            onChange={(e) => {
              SetDepartmentIn0(e.target.value);
            }}
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
};
// value={doctorE.DoctorName}
export default AdminEditDoctors;
