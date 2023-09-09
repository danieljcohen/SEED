import { React, useEffect } from 'react';
import './Investments.css';


function Investments() {
    useEffect(() => {
        document.title = "R1649 - Investments";  
    }, []);

    return (
        <>
            <div className="page-container">
                <h1 className='page-header' id='our-differentiated-approach'>OUR DIFFERENTIATED APPROACH</h1>
                <div className="page-text">
                    <p className='first' id='intro'>
                    Seed's Differentiated Approach is centered around its unique combination of personalized guidance and a diverse network of experienced business professionals. Here are the key components of our approach:
                    </p>
                    <p>

                    </p>
                    <ul className='first'>
                        <li>
                            <u>Experienced Business Mentors:</u> Seed has a vast network of seasoned business leaders and experts across various industries. 
                            We carefully match you with a mentor who has relevant experience and can provide valuable insights and guidance. This mentorship goes beyond traditional financing, offering strategic advice and mentorship.
                            We partner with management teams to drive operational excellence, and support our companies' growth ambitions through our capital allocation and strategic guidance.
                        </li>
                        <li>
                            <u>Customized Funding Solutions:</u> Seed doesn't offer one-size-fits-all funding solutions. 
                            Instead, we work with you to structure a financing plan that aligns with your business's growth 
                            trajectory. Whether you need seed capital, expansion funding, or strategic investment, we adapt our approach to fit your needs.
                        </li>
                        <li>
                        <u>Connection to Opportunity: </u>Beyond financial support, Seed connects you with a broader ecosystem of professionals, 
                        potential partners, and industry influencers. Our extensive network opens doors to valuable opportunities, 
                        partnerships, and collaborations that can accelerate your business's growth.
                        </li>
                    </ul>
                </div>
                <h1 className='page-header' id='our-strategy'>OUR STRATEGY</h1>
                <div className="page-text">
                    <p>
                    Seed's strategy is to empower small business owners and entrepreneurs by facilitating financial access and fostering 
                    meaningful connections.
                    </p>
                    <p>
                    Seed believes in the power of mentorship. We match our portfolio companies with experienced mentors who offer strategic guidance, 
                    share industry insights, and help navigate challenges. This mentorship extends throughout the investment lifecycle.
                    </p>
                </div>
                <h1 className='page-header' id='portfolio-highlights'>PORTFOLIO HIGHLIGHTS</h1>
                <div className="page-text">
                    <p>
                    Behind every investment there’s a story to be told. A story about investment themes and understanding market
                    drivers and tailwinds, about ESG fundamentals and business track records, and about management teams and
                    partnerships.
                    </p>
                    <p className='story'>
                    These are some of our stories. We hope they provide some depth and color and give you a better sense of how we
                    operate at Seed.
                    </p>
                    <div className="grid-container">
                        <div className="text-link">
                            <p>
                            Company 1
                            </p>
                        </div>
                        <div class="image">
                            <img className = "picture" src="media_image.png"/>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div class="image">
                            <img className = "picture" src="media_image.png"/>
                        </div>
                        <div className="text-link">
                            <p>
                            Company 2
                            </p>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="text-link">
                            <p>
                            Company 3
                            </p>
                        </div>
                        <div class="image">
                            <img className = "picture" src="media_image.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Investments