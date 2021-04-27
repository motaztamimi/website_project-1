import { useState, useEffect } from 'react';
import '../style/AdminLogin.css';
import AdminHomePage from './AdminHomePage';
import { auth } from '../config/firebase';
const AdminLogin = () => {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [user, SetUser] = useState(undefined);

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(password);

    await auth
      .signInWithEmailAndPassword(userName, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        SetUser(user);
        console.log('hellllo');
      } else {
        SetUser(undefined);
      }
    });
  }, []);

  useEffect(() => {
    user === undefined ? setLoggedIn(false) : setLoggedIn(true);
  }, [user]);

  return LoggedIn ? (
    <AdminHomePage />
  ) : (
    <>
      <img
        className='LoginBackGround'
        src={`${process.env.PUBLIC_URL}/imges/LoginBackGround.jpeg`}
        alt=''
      />
      <form className='LoginForm' onSubmit={formSubmit}>
        <h2>כניסה</h2>
        <input
          className='FormInput'
          type='text'
          placeholder='שם משתמש'
          name='Login'
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
        />
        <label htmlFor='login'></label>
        <input
          className='FormInput'
          type='password'
          name='LoginPassword'
          placeholder='סיסמה'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <input className='LoginButton' type='submit' value='כניסה' />
      </form>
    </>
  );
};

export default AdminLogin;
