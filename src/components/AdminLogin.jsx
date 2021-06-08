/** @format */

import { useState, useEffect } from 'react';
import '../style/AdminLogin.css';
import AdminHomePage from './AdminHomePage';
import { auth } from '../config/firebase';
import AdminImg from '../imges/ADMIN2.jpg';
import { AiFillHome } from 'react-icons/ai';
const AdminLogin = () => {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [user, SetUser] = useState(undefined);

  const formSubmit = async (e) => {
    e.preventDefault();

    await auth
      .signInWithEmailAndPassword(userName, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
      });
    setPassword('');
    setUserName('');
  };

  useEffect(() => {
    const sup = auth.onAuthStateChanged((user) => {
      if (user) {
        SetUser(user);
      } else {
        SetUser(undefined);
      }
    });

    return () => {
      sup();
    };
  }, []);

  useEffect(() => {
    user === undefined ? setLoggedIn(false) : setLoggedIn(true);
  }, [user]);

  return LoggedIn ? (
    <AdminHomePage />
  ) : (
    <>
      <img className='LoginBackGround' src={AdminImg} alt='' />
      <a href='/'>
        <AiFillHome
          title='HomePage'
          className=' homeInAdmin'
          id='accessIMG'
          color='FFFFFF'
        />
      </a>
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
