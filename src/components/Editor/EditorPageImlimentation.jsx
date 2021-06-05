/** @format */

import React, { useState } from 'react';
import EditorPage from './EditorPage';
import '../../style/EditorPageImlimentation.css';
import { dataBase } from '../../config/firebase.js';
import { AiOutlineUser } from 'react-icons/ai';
import ListAdmin from '../ListAdmin';
import useDataBase from '../../hooks/useDataBase';
function EditorPageImlimentation() {
  const [data, setData] = useState();
  const [DropDownFirst, setDropDownFirst] = useState('');
  const [DropDownSecond, setDropDownSecond] = useState('');
  const [DropDownThird, setDropDownThird] = useState('');
  const [inSquare, setinSquare] = useState('');

  console.log(DropDownSecond);
  const num = [
    { hebrew: 'מידע', english: 'first' },
    { hebrew: 'מנהלים', english: 'second' },
    { hebrew: 'צור קשר', english: 'theird' },
    { hebrew: 'ימי פעולה', english: 'fourth' },
  ];

  const changeSelectOptionHandler = (event) => {
    setDropDownFirst(event.target.value);
    setDropDownSecond('');
  };
  const changeSecondSelectOptionHandler = (event) => {
    setDropDownSecond(event.target.value);
  };
  const changeDropDownThird = (event) => {
    setDropDownThird(event.target.value);
  };
  const getDataFromDataBase = () => {
    if (DropDownFirst !== '' && DropDownSecond !== '' && DropDownThird !== '') {
      const collectionRef = dataBase.collection('Departments');
      const therd = num.filter((e) => e.hebrew === DropDownThird);
      const f = collectionRef.doc(DropDownFirst);
      f.get().then((item) => {
        const dep = item.data()[DropDownSecond];
        if (dep == null) return;
        console.log(dep[therd[0].english]);
        document.getElementById('theText').innerHTML = dep[therd[0].english];
        setinSquare(dep[therd[0].english]);
      });
    }
  };
  const onSubmit = (e) => {
    const en = num.filter((e) => e.hebrew === DropDownThird);
    const toTheBase = {};
    const ans = {};
    ans[en[0].english] = data;
    toTheBase[DropDownSecond] = ans;
    dataBase
      .collection('Departments')
      .doc(DropDownFirst)
      .set(toTheBase, { merge: true });
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
  const d = [
    'מרכז מיצוי זכוית',
    'פניות הציבור',
    'אגוד ידידים',
    'תרומות',
    'ועד משפחות',
    'מתנדבים במרכז',
    'פר"א',
    'שירות סוציאלי',
    'שירות פסיכולוגי',
    'ריפוי בעיסוק',
    'תזונת ודיאטה',
    'קבלת חולים',
  ];
  const f = ['מידע', 'מנהלים', 'צור קשר', 'ימי פעולה'];
  let type = null;

  let options = null;
  let lastOption = null;

  if (DropDownFirst === 'כפר שאול') {
    type = a;
  } else if (DropDownFirst === 'איתנים') {
    type = b;
  } else if (DropDownFirst === 'שירות קהילתי') {
    type = c;
  } else if (DropDownFirst === 'אחר') {
    type = d;
  }

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  if (type == d) {
    lastOption = <option key='10'> מידע </option>;
  } else {
    lastOption = f.map((el) => <option key={el}>{el}</option>);
  }

  const lastDrop = () => {
    if (type == d) {
      console.log('wtf1');
      return <div></div>;
    } else {
      console.log('wtf');
      return (
        <div>
          <option key='7' value='מנהלים'>
            מנהלים
          </option>
          <option key='8' value='צור קשר'>
            צור קשר
          </option>
          <option key='9' value='ימי פעולה'>
            ימי פעולה
          </option>
        </div>
      );
    }
  };

  if (DropDownSecond !== '' && DropDownThird !== '') {
    getDataFromDataBase();
  }

  return (
    <div className='listAdminInEP'>
      <div className='listP'>
        <ListAdmin />
      </div>
      <div>
        <div className='BigEditorContainer'>
          <div id='gridTitle'>בחר המקום המיועד לשינוי</div>
          <a href='/Admin'>
            <AiOutlineUser
              title='AdminPage'
              className='EditSlideShowPage2'
              id='accessIMG'
              color='#151e4d'
            />
          </a>
          <div className='threeColumnEditor'>
            <div className='BigEditorContainer'>
              <h2>קמפוס</h2>
              <select
                required
                id='classes'
                className='dropSelect'
                onChange={changeSelectOptionHandler}>
                <option key='1' value='' defaultValue>
                  בחר קאמפוס
                </option>
                <option key='2' value='כפר שאול'>
                  כפר שאול
                </option>
                <option key='3' value='איתנים'>
                  איתנים
                </option>
                <option key='4' value='שירות קהילתי'>
                  שירות קהילתי
                </option>
              </select>
            </div>
            <div className='BigEditorContainer'>
              <h2>תת מחלקה</h2>
              <select
                className='dropSelect'
                id='classInClass'
                onChange={changeSecondSelectOptionHandler}
                required>
                <option key='' value='' defaultValue>
                  בחר תת מחלקה
                </option>
                {options}
              </select>
            </div>
            <div className='BigEditorContainer'>
              <h2>חלק מהדף</h2>
              <select
                required
                id='classes'
                className='dropSelect'
                onChange={changeDropDownThird}>
                <option key='5' value='' defaultValue>
                  בחר חלק מהדף
                </option>
                <option key='6' value='מידע'>
                  מידע
                </option>
                <option key='7' value='מנהלים'>
                  מנהלים
                </option>
                <option key='8' value='צור קשר'>
                  צור קשר
                </option>
                <option key='9' value='ימי פעולה'>
                  ימי פעולה
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className='dropdown'>{/* page of the part choosen*/}</div>

        <div id='one'>
          <h1>{DropDownThird}</h1>
          <EditorPage
            value={inSquare}
            callBack={(e) => {
              setData(e);
            }}
          />
        </div>

        <div className='finalStage'>
          <div className='beforeButton'>
            <button className='EditorButton' type='button' onClick={onSubmit}>
              Submit
            </button>
          </div>
          <div id='theText'></div>
        </div>
      </div>
    </div>
  );
}

export default EditorPageImlimentation;
