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
                <p className ='copy'>
                    SEED
                </p>
            </section>
        </div>
    );
}

export default Footer;