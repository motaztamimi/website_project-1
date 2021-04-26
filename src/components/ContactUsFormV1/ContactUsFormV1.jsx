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
    <div style={{ width: "30rem", margin: "auto" }}>
      <form className="form" onSubmit={handleSubmit} method="POST">
        <h1>Contact form</h1>
        <label>Name</label>
        <input
          type="text"
          placeholder="name"
          name="name" // to use this input in useform to update it value onChange
          value={values.name}
          onChange={handleChange}
          required
        />

        {errors.NoSenderInformation && <p>{errors.NoSenderInformation}</p>}
        <label>Email</label>
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <label>Phone Number</label>
        <input
          // require the field
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={values.phoneNumber}
          onChange={handleChange}
          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
        <label>Message</label>
        <textarea
          placeholder="Message"
          name="message"
          value={values.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" >
          {/* problem here  */}
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUsFormV1;
