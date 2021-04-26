import { useState } from 'react';
import '../style/AdminLogin.css';
import AdminHomePage from './AdminHomePage';
const AdminLogin = ()=>{
    const [LoggedIn, setLoggedIn] = useState(false)

    
    const formSubmit = (e)=>{

        setLoggedIn(!LoggedIn)
            
    }


    return (
        
       
        LoggedIn ?  (<AdminHomePage/>) : (
            
            <>
            
            <img className='LoginBackGround' src={`${process.env.PUBLIC_URL}/imges/LoginBackGround.jpeg`} alt="" srcset=""/>
            <form className='LoginForm' onSubmit={formSubmit}>

                <h2>כניסה</h2>
                <input className='FormInput' type='text' placeholder='שם משתמש' name='Login'/>
                <label htmlFor='login'></label>
                <input className ='FormInput' type="password" name="LoginPassword" placeholder='סיסמה'/>
                <input className='LoginButton' type="submit" value="כניסה"/>

            </form>
            </>
        )
  
    )




}


export default AdminLogin