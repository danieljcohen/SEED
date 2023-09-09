import React from 'react';
import './Footer.css';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation()

    if(location.pathname === '/') {
        return false;
    }

    return (
        <div className='footer-container'>
            <section className='footer-logo-copy'>
                <img className='logo-footer' src="/placeholder-contact-us.jpg" />
                <p className ='copy'>
                    SEED
                </p>
            </section>
                <div class='footer-links'>
                    <div class='footer-link-items'>
                        <Link to="/about" style={{ textDecoration: 'none' }}>
                            <p className='terms-priv'>TERMS OF USE & DISCLAIMERS</p>
                        </Link>
                    </div>
                    <div class='footer-link-items'>
                        <Link to="/about" style={{ textDecoration: 'none' }}>
                            <p className='terms-priv'>PRIVACY POLICY</p>
                        </Link>
                    </div>
                </div>
                <div className="logos">
                    <img className='linkedin' src="/placeholder-contact-us.jpg" alt="link to Email"/>
                    <img className='email' src="/email.jpeg" alt="link to Email"/>   
                </div>
        </div>
    );
}

export default Footer;