import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn({ onFormSwitch }){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email = e;
        /* Connect database here */
    }

    const switchToRegister = () => {
        onFormSwitch('Register');
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
                <label htmlFor="password">Password: </label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"></input>
                <button type="submit">Sign In</button>
            </form>
            <button onClick={switchToRegister}><u>Don't have an account? Register here</u></button>
        </div>
    );
}
export default SignIn;
