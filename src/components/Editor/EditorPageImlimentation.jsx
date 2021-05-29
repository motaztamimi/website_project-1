import React, { useState } from 'react';
import EditorPage from './EditorPage';
import '../../style/EditorPageImlimentation.css';
import { dataBase } from '../../config/firebase.js';
import { AiOutlineUser } from 'react-icons/ai';

function EditorPageImlimentation() {
  const [first, setfirst] = useState('');
  const [second, setsecond] = useState('');
  const [theird, settheird] = useState('');
  const [fourth, setfourth] = useState('');
  const [dropDownFirst, setdropDownFirst] = useState('');
  const [DropDownSecond, setDropDownSecond] = useState('');
  const [selected, setSelected] = useState('כפר שאול');

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  const onSubmit = (e) => {
    const toAdd = {};
    toAdd[`${DropDownSecond}`] = { first, second, theird, fourth };

    const collectionRef = dataBase.collection('Departments');
    const department = collectionRef.doc(dropDownFirst);
    department.update(toAdd).then(() => {
      console.log('data updated');
      window.location.reload();
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

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  return (
    <div>
      <div className='dropdown'>
        <select id='classInClass'>{options}</select>
        <a href='/Admin'>
      <AiOutlineUser title="AdminPage" className='EditSlideShowPage2' id='accessIMG' color='#151e4d' />
      </a>
        <select
          id='classes'
          className='dropSelect'
          onChange={changeSelectOptionHandler}>
          <option key='1' value='כפר שאול' defaultValue>
            כפר שאול
          </option>
          <option key='2' value='איתנים'>
            איתנים
          </option>
          <option key='3' value='שירות קהילתי'>
            שירות קהילתי{' '}
          </option>
        </select>
      </div>

      <div id='one'>
        <h1>ראשון</h1>
        <EditorPage
          callBack={(e) => {
            setfirst(...first, e);
            if (e) {
              document.getElementById('one').style.display = 'none';
              document.getElementById('two').style.display = 'block';
            }
          }}
        />
      </div>
      <div id='two'>
        <h1>שני</h1>
        <EditorPage
          callBack={(e) => {
            setsecond(...second, e);
            if (e) {
              document.getElementById('two').style.display = 'none';
              document.getElementById('three').style.display = 'block';
            }
          }}
        />
      </div>

      <div id='three'>
        <h1>שלישי</h1>
        <EditorPage
          callBack={(e) => {
            settheird(...theird, e);
            if (e) {
              document.getElementById('three').style.display = 'none';
              document.getElementById('four').style.display = 'block';
            }
          }}
        />
      </div>

      <div id='four'>
        <h1>רביעי</h1>
        <EditorPage
          callBack={(e) => {
            setfourth(...fourth, e);
            setdropDownFirst(
              ...dropDownFirst,
              document.getElementById('classes').value
            );
            setDropDownSecond(
              ...DropDownSecond,
              document.getElementById('classInClass').value
            );
            document.getElementById('four').style.display = 'none';
            Array.from(
              document.getElementsByClassName('finalStage')
            )[0].style.display = 'flex';
            /////////////////////////////////////////////?
            //MUSTAFA
            ////////////////////////////
          }}
        />
      </div>

      <div className='finalStage' style={{ display: 'none' }}>
        <input type='button' value='Submit' onClick={onSubmit} />
      </div>
    </div>
  );
}

export default EditorPageImlimentation;
