import '../style/ContactUs.css'
const ContactUs = ({details}) => {
  return (
    <div class="contactUS">
      <h5> מוקד זימון תורים</h5>
      <a href="*8888">
        <h2>{details.moked_num}</h2>
      </a>
      <h5>{details.address}</h5>
      <h5>
         דואר אלקטרוני :   
        <a href="niogsnreiogne@gmail.com">
          <span>{details.email} </span>
        </a>
      </h5>
      <h5> טלפון:             
        <a href="tel">
          <span> {details.tel} </span>
        </a>
      </h5>
      <h5>
        פקס:
        <a href="fax">
          <span> {details.fax} </span>
        </a>
      </h5>
      <h5>{details.time}</h5>
      <h5>{details.language}</h5>
      <div>
        <button
          href="button"
          name="BureauButton"
          target="_blank"
          title="יחידות קבלת קהל"
        >
          <div>
            <span>יחידות קבלת קהל</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
