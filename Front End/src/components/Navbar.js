import React, { useEffect, useState } from 'react';
import { Link as NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const animation = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 1050) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize',showButton)

    const location = useLocation();

    const { pathname, hash, key } = location;

    const splitLocation = pathname.split("/");
    console.log(splitLocation)

    
    useEffect(() => {
        showButton();
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
            window.scrollTo({top:0, behavior: "smooth"})
        }
    }, [location, ])

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Seed
                    </NavLink>
                    <div className='menu-icon' onClick={animation}>
                        <div className={!click ? 'bar1' : 'change-bar1'} />
                        <div className={!click ? 'bar2' : 'change-bar2'} />
                        <div className={!click ? 'bar3' : 'change-bar3'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item-dropdown'>
                            <div className={splitLocation[1] === "about" ? "nav-underline-current" : "nav-underline"}>
                                <NavLink to = '/about' className='nav-links' onClick={closeMobileMenu}>
                                    ABOUT
                                    <i class="triangle-down"></i>
                                </NavLink>
                            </div>
                            <ul className='dropdown-content'>
                                <li><a href="/about#who-we-are" className='dropdown-item'>WHO WE ARE</a></li>
                                <li><a href="/about#how-we-invest" className='dropdown-item'>HOW SEED WORKS</a></li>
                                <li><a href="/about#our-history" className='dropdown-item'>OUR FOUNDERS</a></li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <div className={splitLocation[1] === "our-people" ? "nav-underline-current" : "nav-underline"}>
                                <NavLink to = '/our-people' className='nav-links' onClick={closeMobileMenu}>
                                    OUR INVESTORS
                                </NavLink>
                            </div>
                        </li>
                        <li className='nav-item-dropdown'>
                            <div className={splitLocation[1] === "investments" ? "nav-underline-current" : "nav-underline"}>
                                <NavLink to = '/investments' className='nav-links' onClick={closeMobileMenu}>
                                    INVESTMENTS
                                    <i class="triangle-down"></i>
                                </NavLink>
                            </div>

                            <ul className='dropdown-content'>
                                <li><a href="/investments#our-differentiated-approach" className='dropdown-item'>OUR DIFFERENTIATED APPROACH</a></li>
                                <li><a href="/investments#our-strategy" className='dropdown-item'>OUR STRATEGY</a></li>
                                <li><a href="/investments#portfolio-highlights" className='dropdown-item'>PORTFOLIO HIGHLIGHTS</a></li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <div className={splitLocation[1] === "Profile" ? "nav-underline-current" : "nav-underline"}>
                                <NavLink to = '/Profile' className='nav-links' onClick={closeMobileMenu}>
                                    PROFILE
                                </NavLink>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <div className={splitLocation[1] === "contact-us" ? "nav-underline-current" : "nav-underline"}>
                                <NavLink to = '/contact-us' className='nav-links' onClick={closeMobileMenu}>
                                    CONTACT US
                                </NavLink>
                            </div>
                        </li>
                        <li className='login'>
                            <div className={splitLocation[1] === "login" ? "nav-underline-current" : "nav-underline"}>
                                <NavLink to = '/login' className='nav-links' onClick={closeMobileMenu}>
                                    <p className='text'> Login / Signup</p>
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar