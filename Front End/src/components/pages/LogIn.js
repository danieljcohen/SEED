import React, {useState} from 'react';
import SignIn from './SignIn.js';
import { Register } from './Register';

export default function LogIn(){
    const [currentForm, setCurrentForm] = useState('SignIn');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return(
        <div className="App">
        {
            currentForm === "SignIn" ? <SignIn onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
        </div>
    )
}