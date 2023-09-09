import { React, useEffect } from 'react';
import './OurPeoplePage.css';
import { Outlet, Link } from 'react-router-dom';

function OurPeoplePage() {
    useEffect(() => {
        document.title = "R1649 - Our People";  
    }, []);

    return (
        <div className="page-container">
                <h1 className="page-header">GLOBALLY INTEGRATED FOR SUCCESS</h1>
                <p className="page-text">
                    The leadership of Lincoln International includes the original founders and a team of professionals who oversee the strategy and performance of the firm globally. Lincoln’s leaders are stewards of our culture and developers of talent, assuring that what clients value most about our offerings and our people endure for years to come.
                </p>
                <p className="page-text">
                    The information we gather and share through our full immersion approach is leveraged through the cohesive and collaborative approach of our exceptional team. In addition to the cast experience of our investment team, Tailwater has a unique ecosystem for creating value throughout our core sectors of focus.
                </p>
                {/* <section className='team'> */}
                    <h1 className='page-header'>OUR TEAM</h1>
                    <div className='our-people-row' >
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                JAY DAVE<br/>
                                FOUNDER & CEO
                            </h3>
                        </div>
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                JAY DAVE<br/>
                                FOUNDER & CEO
                            </h3>
                        </div>
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                JAY DAVE<br/>
                                FOUNDER & CEO
                            </h3>
                        </div>
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                JAY DAVE<br/>
                                FOUNDER & CEO
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
                                JAY DAVE<br/>
                                FOUNDER & CEO
                            </h3>
                        </div>
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                JAY DAVE<br/>
                                FOUNDER & CEO
                            </h3>
                        </div>
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                JAY DAVE<br/>
                                FOUNDER & CEO
                            </h3>
                        </div>
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                JAY DAVE<br/>
                                FOUNDER & CEO
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
                                JAY DAVE<br/>
                                FOUNDER & CEO
                            </h3>
                        </div>
                        <div className='person'>
                            <Link to='http://google.com' target='_blank'>
                                <div className='img-wrapper'>
                                    <img className='person-img' src='/media_image.png' />
                                </div>
                            </Link>
                            <h3 className='our-people-card-text'>
                                JAY DAVE<br/>
                                FOUNDER & CEO
                            </h3>
                        </div>
                    </div>
                {/* </section> */}
        </div>
    );
}

export default OurPeoplePage;
