import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from './firebase';


function Register({ onFormSwitch }) {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await user.updateProfile({
                displayName: name
            });
            console.log('User registered:', user);
            // You can redirect or perform additional actions here after successful registration
        } catch (error) {
            console.error('Error registering:', error.message);
        }
    }



    const switchToSignIn = () => {
        onFormSwitch('SignIn');
    }



    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Create Account</button>
        </form>
        <p>Already have an account? <button onClick={switchToSignIn}>Sign In</button></p>
    </div>
    );
}
export default Register;