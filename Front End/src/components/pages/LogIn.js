import React, { useState } from 'react';
import SignIn from './SignIn';
import Register from './Register';
import './LogIn.css'; 

export default function LogIn() {
   const [currentForm, setCurrentForm] = useState('SignIn');

   const switchForm = (formName) => {
       setCurrentForm(formName);
   }

   return (
       <div className="App">
           <div className="form-container">
               <div className="form-switch">
                   <button
                       onClick={() => switchForm('SignIn')}
                       className={currentForm === 'SignIn' ? 'active' : ''}
                   >
                       Sign In
                   </button>
                   <button
                       onClick={() => switchForm('Register')}
                       className={currentForm === 'Register' ? 'active' : ''}
                   >
                       Register
                   </button>
               </div>
               {currentForm === "SignIn" ? (
                   <SignIn onFormSwitch={switchForm} />
               ) : (
                   <Register onFormSwitch={switchForm} />
               )}
           </div>
       </div>
   )
}





