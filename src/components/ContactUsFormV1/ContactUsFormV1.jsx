import React, { useState } from "react";
import "../../style/ContactUsFormV1.css";
import useForm from "./useForm";
import validate from "./validateInfo";

function ContactUsFormV1() {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  const clickSubmitButton = (e) => {
    e.preventDefault();
    window.open(
      "mailto:" +
        values.email +
        "?subject=" +
        values.name +
        "&body=" +
        values.message
    );
  };
  return (
    <div style={{}}>
      <form className="form" onSubmit={clickSubmitButton} method="POST">
        <label>שם</label>
        <input
          type="text"
          placeholder="שם"
          name="name" // to use this input in useform to update it value onChange
          value={values.name}
          onChange={handleChange}
          required
        />

        {/* {errors.NoSenderInformation && <p>{errors.NoSenderInformation}</p>} */}
        <label>מייל</label>
        <input
          placeholder="מייל"
          type="email"
          name="email"
          required
          value={values.email}
          onChange={handleChange}
        />
        <label>מספר פלפון</label>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="מספר פלון"
          value={values.phoneNumber}
          onChange={handleChange}
        />
        <label>הודעה</label>
        <textarea
          placeholder="הודעה"
          name="message"
          value={values.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">שלח</button>
      </form>
    </div>
  );
}

export default ContactUsFormV1;
