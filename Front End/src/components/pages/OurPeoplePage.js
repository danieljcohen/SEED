import { React, useEffect } from 'react';
import './OurPeoplePage.css';
import { Outlet, Link } from 'react-router-dom';

function OurPeoplePage() {
    useEffect(() => {
        document.title = "R1649 - Our People";  
    }, []);

    return (
        <div className="page-container">
                {/* <section className='team'> */}
                    <h1 className='page-header'>OUR INVESTORS</h1>
                    <div className='our-people-row' >
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                INVESTOR 1<br/>
                                EXPERTISE
                            </h3>
                        </div>
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                INVESTOR 2<br/>
                                EXPERTISE
                            </h3>
                        </div>
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                INVESTOR 3<br/>
                                EXPERTISE
                            </h3>
                        </div>
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                INVESTOR 4<br/>
                                EXPERTISE
                            </h3>
                        </div>
                    </div>
                    <div className='our-people-row' >
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                INVESTOR 5<br/>
                                EXPERTISE
                            </h3>
                        </div>
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                INVESTOR 6<br/>
                                EXPERTISE
                            </h3>
                        </div>
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                INVESTOR 7<br/>
                                EXPERTISE
                            </h3>
                        </div>
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                INVESTOR 8<br/>
                                EXPERTISE
                            </h3>
                        </div>
                    </div>
                    <div className='our-people-row' >
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                INVESTOR 9<br/>
                                EXPERTISE
                            </h3>
                        </div>
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                INVESTOR 10<br/>
                                EXPERTISE
                            </h3>
                        </div>
                    </div>
                {/* </section> */}
        </div>
    );
}

export default OurPeoplePage;
