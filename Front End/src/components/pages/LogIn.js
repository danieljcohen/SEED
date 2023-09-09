import React, { useState } from 'react';
import SignIn from './SignIn';
import Register from './Register';

export default function LogIn() {
   const [currentForm, setCurrentForm] = useState('SignIn');

   const switchForm = (formName) => {
       setCurrentForm(formName);
   }

   return (
       <div className="App">
           {currentForm === "SignIn" ? (
               <SignIn onFormSwitch={switchForm} />
           ) : (
               <Register onFormSwitch={switchForm} />
           )}
       </div>
   )
}





