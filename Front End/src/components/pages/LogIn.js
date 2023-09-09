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
            <div className="secondShadow">
                <div className="form-container">
                    {currentForm === "SignIn" ? (
                        <SignIn onFormSwitch={switchForm} />
                    ) : (
                        <Register onFormSwitch={switchForm} />
                    )}
                </div>
            </div>
       </div>
   )
}





