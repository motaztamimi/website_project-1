import Branches from "./Branches";
import ContactUs from "./ContactUs";
import '../style/Information.css'
const Information = () => {
  return (
    <section className="Information">
      <section className="columnBranches">
        <h2>מחלקות</h2>
        <Branches />
      </section>
      <section className="columnContactUs">
        <h2>צור קשר</h2>
        <ContactUs />
      </section>
    </section>
    
  );
};

export default Information;
