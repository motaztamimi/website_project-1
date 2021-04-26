export default function validateInfo(values) {
  let errors = {};

//   if (!values.name.trim()) {
//     //trim to remove the spaces 'white space' // the name here is what in the values usestate
//     errors.name = "name required"; //changed username here
//   }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

//   if (!values.email) {
//       res.email ='khaderzatari@gmail.com'
    
 // } else 
 if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

if(!values.email && !values.phoneNumber){
    errors.NoSenderInformation = "לרשום את המייל או מספר הפלפון"
}

//   if (!values.password) {
//     errors.password = "Password is required";
//   } else if (values.password.length < 6) {
//     errors.password = "Password needs to be 6 characters or more";
//   }

//   if (!values.password2) {
//     errors.password2 = "Password is required";
//   } else if (values.password2 !== values.password) {
//     errors.password2 = "Passwords do not match";
//   }
  return errors;
}
