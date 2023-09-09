import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from './firebase';

import './Register.css'; 

function Register({ onFormSwitch }) {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        
    }



    const switchToSignIn = () => {
        onFormSwitch('SignIn');
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name" className="form-label">Full Name: </label>
                <input
                    value={name}
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="Full Name"
                    className="form-input"
                />
                <label htmlFor="email" className="form-label">Email: </label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                    className="form-input"
                />
                <label htmlFor="password" className="form-label">Password: </label>
                <input
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                    className="form-input"
                />
                <button type="submit" className="form-button">Register</button>
            </form>
            <p className="form-text">Already have an account? <button onClick={switchToSignIn} className="form-link"><u>Sign In</u></button></p>
        </div>
    );
}

export default Register;