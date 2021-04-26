import React, { useState } from "react";
import "../../style/ContactUsFormV1.css";
import useForm from "./useForm";
import validate from "./validateInfo";

function ContactUsFormV1() {
  //const [name, setName] = useState("");   1 way
  //  value={name}
  // onChange={(e) => setName(e.target.value)}›

  const clickSubmitButton = (e) => {
    e.preventDefault();
    console.log("clicked");
    return <alert> it's submitted</alert>;
  };

  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  return (
    <div style={{ }}>
      <form className="form" onSubmit={handleSubmit} method="POST">
        <h1>צור איתנו קשר</h1>
        <label>שם</label>
        <input
          type="text"
          placeholder="שם"
          name="name" // to use this input in useform to update it value onChange
          value={values.name}
          onChange={handleChange}
          required
        />

        {errors.NoSenderInformation && <p>{errors.NoSenderInformation}</p>}
        <label>מייל</label>
        <input
          placeholder="מייל"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <label>מספר פלפון</label>
        <input
          // require the field
          type="tel"
          name="phoneNumber"
          placeholder="מספר פלון"
          value={values.phoneNumber}
          onChange={handleChange}
          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
        <label>הודעה</label>
        <textarea
          placeholder="הודעה"
          name="message"
          value={values.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" >
          {/* problem here  */}
          שלח
        </button>
      </form>
    </div>
  );
}

export default ContactUsFormV1;
