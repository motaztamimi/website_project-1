/** @format */

import Branches from './Branches';
import ContactUs from './ContactUs';
import '../style/Information.css';
const Information = () => {
  const contact_details = {
    id: 1,
    moked_num: '*8888',
    address: 'כתובת שדרות יצחק רבין 1 באר יעקב, 7032102',
    email: 'niogsnreiogne@gmail.com',
    tel: '025554488',
    fax: '025554488',
    time: 'מענה טלפוני:  16:00 - 08:00',
    language: 'שפות מענה עברית, אנגלית ורוסית',
  };
  return (
    <section className='Information'>
      <section className='columnBranches'>
        <h2>מחלקות</h2>
        <Branches />
      </section>
      <section className='columnContactUs'>
        <h2>צור קשר</h2>
        <ContactUs details={contact_details} />
      </section>
    </section>
  );
};

export default Information;
