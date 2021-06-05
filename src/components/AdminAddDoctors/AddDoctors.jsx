/** @format */

// import React from 'react';
import './AddDoctors.css';
import { dataBase, timestamp, storage } from '../../config/firebase';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

const AddDoctors = () => {
  const [file, setFile] = useState(null);
  const [showDiv, setShowDiv] = useState(false);
  const history = useHistory();
  const [selected, setSelected] = useState('');
  const div = (
    <div className='loading'>
      <div className='loader'></div>
    </div>
  );
  const [DoctorName, SetDoctorName] = useState('');
  const [DoctorSpecialty, setDoctorSpecialty] = useState('');
  const [DepartmentOut, SetDepartmentOut] = useState('');
  const [DepartmentIn, SetDepartmentIn] = useState('');

  const types = ['image/png', 'image/jpeg', 'img/jpg'];
  const collectionRef = dataBase.collection('Doctors');
  const onFileChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
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
            DepartmentOut: DepartmentOut,
            DepartmentIn: DepartmentIn,
            createdAt: timestamp(),
          })
          .then((value) => {
            history.push('/Admin/AdminEditDoctors');
          });
      });
    });
  };
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
  if (selected === 'כפר שאול') {
    type = a;
  } else if (selected === 'איתנים') {
    type = b;
  } else if (selected === 'שירות קהילתי') {
    type = c;
  }

  const changeSelectOptionHandler = (event) => {
    SetDepartmentOut(event.target.value);
    setSelected(event.target.value);
  };
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  return (
    <div>
      <div className='AddDoctorsPage'>
        <a href='/Admin'>
          <AiOutlineUser
            title='AdminPage'
            className='EditSlideShowPage2'
            id='accessIMG'
            color='#151e4d'
          />
        </a>
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
          <label> מחלקה חיצונית</label>
          <select
            required
            id='classes'
            className='dropSelect'
            onChange={changeSelectOptionHandler}>
            <option key='4' value='' defaultValue>
              בחר קמפוס
            </option>
            <option key='1' value='כפר שאול' defaultValue>
              כפר שאול
            </option>
            <option key='2' value='איתנים'>
              איתנים
            </option>
            <option key='3' value='שירות קהילתי'>
              שירות קהילתי
            </option>
          </select>
          <label> מחלקה פנימית</label>
          <select
            onChange={(e) => {
              SetDepartmentIn(e.target.value);
            }}
            required
            className='dropSelect'>
            <option>בחר מחלקה</option>
            {options}
          </select>
          <input className='SubmitButton' type='submit' value='submit' />
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;
