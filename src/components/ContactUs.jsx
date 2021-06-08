/** @format */

import { useHistory } from 'react-router-dom';

import '../style/ContactUs.css';
const ContactUs = ({ details }) => {
  const history = useHistory();
  return (
    <div className='contactUS'>
      {/* <h5> מוקד זימון תורים</h5> */}
      {/* <a href='2786*'>
        <h4>{details.moked_num}</h4>
      </a> */}
      <h5>{details.address}</h5>
      <h5>{details.address2}</h5>
      <h5>
        דואר אלקטרוני :
        <a href='mailto:p.tzibur@moh.gov.il'>
          <span>{details.email} </span>
        </a>
      </h5>
      <h5>
        {' '}
        מספר נייד:
        <a href='tel'>
          <span> {details.tel} </span>
        </a>
      </h5>
      <h5>
        פקס:
        <a href='fax'>
          <span> {details.fax} </span>
        </a>
      </h5>
      <h5>{details.time}</h5>
      <h5>{details.language}</h5>
      <div>
        <button
          href='button'
          name='BureauButton'
          target='_blank'
          title='יחידות קבלת קהל'
          onClick={() => {
            history.push('/ContactUs');
          }}>
          <div>
            <span>יחידות קבלת קהל</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
