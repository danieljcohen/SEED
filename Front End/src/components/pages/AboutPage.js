import React, { useEffect, useState } from 'react';
import './AboutPage.css';
import '../../App.css';

function AboutPage() {
    useEffect(() => {
        document.title = "R1649 - About";  
    }, []);

    return (
        <>
            <div className='page-container'>
                <h1 className="page-header" id='who-we-are'>WHO WE ARE</h1>
                <p className='page-text'>
                    Welcome to Seed, where the worlds of entrepreneurship and investment converge to cultivate success. 
                Founded by three visionary Duke students, Seed is more than just a web application; it's a dynamic bridge
                connecting passionate business owners with businessmen eager to invest not just capital, but also their 
                invaluable connections. 
                </p>
                <p className='page-text'>
                    Our mission is to empower entrepreneurs with the resources and relationships 
                they need to thrive in an ever-evolving market. With Seed, you can unlock opportunities, foster growth, 
                and nurture partnerships that can transform your business journey. Join us in sowing the seeds of innovation, 
                collaboration, and prosperity today. Let's grow together with Seed.
                </p>

    

                <h2 className="page-header" id='how-we-invest'>HOW SEED WORKS</h2>
                <p className='page-text'>
                        Seed operates as a user-friendly and transparent platform designed to seamlessly 
                    connect small business owners and prospective investors seeking equity opportunities. 
                    Here's how it works:
                </p>
                <p className='page-text'>
                        Small business owners looking to raise capital through equity can create detailed listings on Seed. 
                    They provide essential information about their company, including its background, mission, financials, 
                    and how much equity they're willing to sell.
                </p>
                <p className='page-text'>
                        Business owners can clearly outline the terms of their equity offering, including the percentage of 
                    equity available, the price per share, and any additional terms or conditions.
                </p>
                <p className='page-text'>
                        Investors looking for opportunities can search through the platform's listings, filtering options 
                    based on their investment preferences, such as industry, location, or size. They can browse the profiles 
                    of businesses that align with their interests and investment criteria.
                </p>
                <p className='page-text'>
                        As the small business grows with the support of the investor's equity and connections, both parties 
                    benefit from the success of their collaboration. Seed continues to serve as a platform for networking, 
                    advice, and future investment opportunities.
                </p>
                <h2 className="page-header" id='our-history'>OUR FOUNDERS</h2>
                <div className='about-page-row'>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/media_image.png'}/>
                        {/* <p>
                            20+ <br/> Employees 
                        </p> */}
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/media_image.png'}/>
                        {/* <p>
                            $7.0B+ <br/> Total Transaction Volume 
                        </p> */}
                    </div>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/media_image.png'}/>
                        {/* <p>
                            10+ <br/> Deals Executed
                        </p> */}
                    </div>
                </div>

                <div className='about-page-row about-page-row-text'>
                    <p>
                        Daniel Cohen 
                    </p>
                    <p>
                        Gage Garcia
                    </p>
                    <p>
                        Kethan Poduri
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutPage

