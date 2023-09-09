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
                    We specialize in infrastructure and real assets, investing capital on behalf of pensions, endowments and other
                    large institutions from around the world, looking to grow these critical assets to create value for all
                    stakeholders.
                </p>
                <p className='page-text'>
                    We invest in the infrastructure that underpins all our daily lives – the physical assets that power homes,
                    connect communities to the internet, feed families, enable travel, and deliver goods.
                </p>

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
                    <div>
                        <img src={process.env.PUBLIC_URL + '/media_image.png'}/>
                        {/* <p>
                            20,000+ <br/> Relationships 
                        </p> */}
                    </div>
                </div>

                <div className='about-page-row about-page-row-text'>
                    <p>
                        20+ <br/> Employees 
                    </p>
                    <p>
                        $7.0B+ <br/> Total Transaction Volume 
                    </p>
                    <p>
                        10+ <br/> Deals Executed
                    </p>
                    <p>
                        20,000+ <br/> Relationships 
                    </p>
                </div>

                <h2 className="page-header" id='how-we-invest'>HOW WE INVEST</h2>
                <p className='page-text'>
                    Our track record is founded on investing in essential infrastructure that delivers enduring social utility. We
                    work closely with management teams, bringing growth capital, operational expertise, and technologies that
                    help build better businesses and create value for our stakeholders.
                </p>
                <p className='page-text'>
                    Through our distinct positioning, Tailwater provides differentiated insights into debottlenecking
                    opportunities, long-term macro trends, and environmentally conscious investing. We believe our sectors are
                    constantly evolving, and we believe our unique perspective sets us apart in the industry.
                </p>
                <h2 className="page-header" id='our-history'>OUR HISTORY</h2>
                <p className='page-text'>
                    Our track record is founded on investing in essential infrastructure that delivers enduring social utility. We
                    work closely with management teams, bringing growth capital, operational expertise, and technologies that
                    help build better businesses and create value for our stakeholders.
                </p>
            </div>
        </>
    )
}

export default AboutPage

