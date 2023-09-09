import React, { useState } from 'react';
import "./SignIn.css"
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from './firebase'; // Import the function to sign in

function SignIn({ onFormSwitch }){
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

    }



    const switchToRegister = () => {
        onFormSwitch('Register');
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <label htmlFor="email">Email: </label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
                <label htmlFor="password">Password: </label>
                <input value = {password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"></input>
                <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account? <button onClick={switchToRegister}><u>Register here</u></button></p>
        </div>
    );
}
export default SignIn;
