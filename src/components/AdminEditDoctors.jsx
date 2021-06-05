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
import ListAdmin from './ListAdmin';
const AdminEditDoctors = () => {
  const [DoctorName0, SetDoctorName0] = useState('');
  const [DoctorSpecialty0, setDoctorSpecialty0] = useState('');
  const [DepartmentOut0, SetDepartmentOut0] = useState('');
  const [DepartmentIn0, SetDepartmentIn0] = useState('');
  const [DoctorImage0, setDoctorImage0] = useState('');
  const [doctorE, setdoctorE] = useState('');
  const [editorS, seteditorS] = useState('');
  const types = ['image/png', 'image/jpeg', 'img/jpg'];
  const [file, setFile] = useState(null);
  const history = useHistory();
  const routeChange = () => {
    let path = '/Admin/AdminAddDoctors/AddDoctors';
    history.push(path);
  };
  const editDoctorF = (doctor) => {
    seteditorS(1);
    setdoctorE(doctor);
    SetDoctorName0(doctor.DoctorName);
    setDoctorImage0(doctor.DoctorImage);
    console.log(DoctorImage0);
    setDoctorSpecialty0(doctor.DoctorSpecialty);
    SetDepartmentOut0(doctor.DepartmentOut);
    SetDepartmentIn0(doctor.DepartmentIn);
    console.log(document.getElementById('input1').value);
  };
  /***************************************************** */

  const [campos, setCampos] = useState('');
  const [part, setPart] = useState('');
  const a = [
    'מיון והשהייה',
    'מחלקה פעילה (סגורה) א׳',
    'מחלקה פעילה (פתוחה) ב׳',
    'מחלקה פעילה ממושכת ג׳(פסיכוגריאטריה)',
    'מחלקה פעילה ממושכת (סגורה) ד׳',
    'מחלקה פעילה (סגורה) ה׳(פסיכוגריאטריה)',
    'אשפוז יום',
  ];
  const b = [
    'חדר מיון',
    'מחלקה פעילה (סגורה) א׳',
    'מחלקה פעילה (פתוחה) ב׳',
    'מחלקת אוטיסטים',
    'מחלקה נשים',
    'מחלקת המשך (אוטיסטים)',
    'המחלקה לטיפול בילדים ובנוער על-שם דונלד כהן',
  ];
  const c = [
    'המרפאה הקהילתית לבריאות הנפש-רח׳ שלום יהודה',
    'המרפאה הקהילתית לבריאות הנפש-קרית יובל (בוגרים)',
    'התחנה לבריאות הנפש-קרית יובל (ילדים ונוער)',
    'המרפאה הקהיתית לבריאות הנפש - בית שמש',
    'המרפאה הקהיתית לבריאות הנפש - מעלה אדומים',
    'המכון לטיפול בבעיות סמים ותחלואה כפולה - תלפיות',
    'התחנה לטיפול בילד ובנוער - רח׳ החי״ש קטמון',
    'היחידה לגיל הרך',
    'מרפאה שיקומית - עיר גנים',
    'המרכז לטיפול יום אינטנסיבי - ארנונה',
  ];
  let type = null;
  let options = null;
  if (campos === 'כפר שאול') {
    type = a;
  } else if (campos === 'איתנים') {
    type = b;
  } else if (campos === 'שירות קהילתי') {
    type = c;
  }
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  function changeCampos(e) {
    setCampos(e.target.value);
  }
  function changePart(e) {
    setPart(e.target.value);
  }
  /***************************************************** */
  const DataDoctors = useDataBase('Doctors');
  function getTheDoctores() {
    const doctorFilter = DataDoctors.docs.filter(
      (e) => e.DepartmentOut === campos
    );
    const doctorFilterIn = doctorFilter.filter((e) => e.DepartmentIn === part);
    return doctorFilterIn;
  }
  const deleteDoctor = (doctor) => {
    const colecstion = dataBase.collection('Doctors');
    const item = colecstion.doc(doctor.id);
    item.delete();
    const storageRef = storage.refFromURL(doctor.DoctorImage);
    storageRef.delete().catch((err) => {
      console.log(err);
    });
  };
  function editDoctor00(e) {
    e.preventDefault();
    if (file != null) {
      const storageRef = storage.ref(`Doctors/${file.name}`);
      let url;
      storageRef.put(file).then((snapshot) => {
        storageRef.getDownloadURL().then((data) => {
          url = data;
          const storageRef = storage.refFromURL(doctorE.DoctorImage);
          storageRef.delete();
          dataBase
            .collection('Doctors')
            .doc(doctorE.id)
            .update({ DoctorImage: url });
        });
      });
    }
    dataBase
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
    seteditorS(0);
  }
  const onFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };
  function styleEdit() {
    if (editorS !== 1) {
      const f = {
        display: 'none',
      };
      return f;
    }
  }
  const styleD = {};
  if (getTheDoctores() == null) {
    styleD = {
      display: 'none',
    };
  }
  function exitFormB(e) {
    seteditorS(0);
  }
  return (
    <div className='wholePageD'>
      <div className='overlyForm' style={styleEdit()}>
        <button onClick={exitFormB}>X</button>
        <h1 id='editorTitle'>עריכת הרופא הרצוי</h1>
        <form id='FORMD' onSubmit={editDoctor00}>
          <label>תמונת הרופא</label>
          <input type='file' onChange={onFileChange} />
          <br />
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
          <input
            className='motaz'
            type='text'
            id='input4'
            defaultValue={DepartmentIn0}
            onChange={(e) => {
              SetDepartmentIn0(e.target.value);
            }}
          />
          <br />
          <br />
          <br />

          <input type='submit' value='Submit' />
        </form>
      </div>
      <div className='listAdminn'>
        <div className='ll'>
          <div className='llo'>
            <ListAdmin />
          </div>
        </div>
        <div className='DoctorBody'>
          <div className='headerDoctors'>
            <a href='/Admin'>
              <AiOutlineUser
                title='AdminPage'
                className='EditSlideShowPage2'
                id='accessIMG'
                color='#151e4d'
              />
            </a>
            <button className='ButtonAddD' onClick={routeChange}>
              Add Doctors
            </button>
            <div className='chooseTheCampos'>
              <h2>בחר המחלקה שאתה רוצה לצפות ברופאים שלה</h2>
              <select onChange={changeCampos}>
                <option value='' defaultValue>
                  בחר קאמפוס
                </option>
                <option value='כפר שאול'>{'כפר שאול'} </option>
                <option value='שירות קהילתי'>{'שירות קהילתי'} </option>
                <option value='איתנים'>{'איתנים'} </option>
              </select>
              <select onChange={changePart}>
                <option>בחר מחלקה</option>
                {options}
              </select>
            </div>
          </div>
          <div style={styleD} className='doctoerDetails'>
            {getTheDoctores().map((element) => {
              return (
                <div className='doctoerDetailsIn' key={element.DoctorName}>
                  <div className='wrapper'>
                    <div className='img-area'>
                      <div className='inner-area'>
                        <img src={element.DoctorImage} />
                      </div>
                    </div>
                    <div className='name'>{element.DoctorName}</div>
                    <div className='about'>
                      <br />
                      תפקיד :{element.DoctorSpecialty}
                      <br />
                      קאמפוס :{element.DepartmentOut}
                      <br />
                      מחיקה :{element.DepartmentIn}
                      <br />
                      <br />
                    </div>
                    <div className='buttons'>
                      <button
                        className='buttonD'
                        onClick={() => {
                          deleteDoctor(element);
                        }}>
                        מחיקה
                      </button>
                      <button
                        className='buttonE'
                        onClick={() => {
                          editDoctorF(element);
                        }}>
                        <a href='#editorTitle'>עריכה</a>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='editorDoctor' style={styleEdit()}>
            {/* <h1 id='editorTitle'>עריכת הרופא הרצוי</h1> */}
            {/* <form id='FORMD' onSubmit={editDoctor00}>
              <label>תמונת הרופא</label>
              <input
                type='file'
                onChange={onFileChange}
                defaultValue={DoctorImage0}
                required
              />
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
              <input
                className='motaz'
                type='text'
                id='input4'
                defaultValue={DepartmentIn0}
                onChange={(e) => {
                  SetDepartmentIn0(e.target.value);
                }}
              />
              <input type='submit' value='Submit' />
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminEditDoctors;
