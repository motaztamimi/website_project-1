import { useState, useEffect } from "react";

const useForm = (validate) => {
  const [values, setValue] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value, //[in the brackets is the name and the email above] : and here is the value // when we are in the name input it
      //wiil change the state of the name key in the values state
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setValue({ ...values, [values.email]: validate(values).email });
    setErrors(validate(values));
  };

  return { handleChange, values, handleSubmit, errors };
};
export default useForm;
