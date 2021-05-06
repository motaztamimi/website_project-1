export default function validateInfo(values) {
  let errors = {};

 if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

if(!values.email && !values.phoneNumber){
    errors.NoSenderInformation = "לרשום את המייל או מספר הפלפון"
}


  return errors;
}
